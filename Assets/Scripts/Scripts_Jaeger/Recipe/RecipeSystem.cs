using System.Collections.Generic;
using System.Linq;
using Base;
using cfg;
using UnityEngine;



/// <summary>
/// 卡牌事件系统（包括配方、单击、长按等，需要的话可以拆分成多个系统）
/// </summary>
public class RecipeSystem : SingletonBase<RecipeSystem>
{
    private readonly List<Recipe> _recipes = new();
    private List<RecipeProcess> activeProcesses = new();

    void Start()
    {
        List<RecipeData> recipeDatas = DataManager.GetAllRecipeData();
        foreach (var recipeData in recipeDatas)
        {
            RegisterRecipe(new Recipe(recipeData));
        }
    }
    void Update()
    {
        for (int i = activeProcesses.Count - 1; i >= 0; i--)
        {
            var p = activeProcesses[i];
            if (!p.isRunning)
            {
                activeProcesses.RemoveAt(i);
                continue;
            }

            // 检查堆是否还有效（没被修改）
            if (p.stack.IsDirty)
            {
                Debug.Log($"[{p.recipe.Id}] 被中断！");
                p.isRunning = false;
                activeProcesses.RemoveAt(i);
                continue;
            }

            p.elapsedTime += Time.deltaTime;
            if (p.elapsedTime >= p.recipe.WorkTime)
            {
                CompleteRecipe(p);
                activeProcesses.RemoveAt(i);
            }
        }
    }
    /// <summary>
    /// 注册配方
    /// </summary>
    /// <param name="recipe"> 配方 </param>
    public void RegisterRecipe(Recipe recipe){
        _recipes.Add(recipe);
        Debug.Log($"注册配方：{recipe.Description}");
    }

    /// <summary>
    /// 查找匹配的配方
    /// </summary>
    /// <param name="cards"> 卡牌列表 </param>
    /// <param name="matchedCards"> 匹配的卡牌列表 </param>
    /// <returns> 配方 </returns>
    public Recipe FindMatch(List<Card> cards, out List<Card> matchedCards)
    {
        var ids = cards.Select(c => c.Id);
        matchedCards = new();
        Recipe recipe = _recipes.FirstOrDefault(r => r.Matches(ids));
        if (recipe == null) return null;
        foreach (var id in recipe.InputIds)
        {
            var currentFind = cards.FirstOrDefault(c => c.Id == id);
            if (currentFind != null){
                matchedCards.Add(currentFind);
            }
            else{
                Debug.LogError($"卡牌{id}不存在");
            }
        }
        return recipe;
    }

    /// <summary>
    /// 开始一次合成
    /// </summary>
    /// <param name="stack"> 合成堆 </param>
    /// <param name="recipe"> 配方 </param>
    public void StartProcess(Stack stack, Recipe recipe){
        var process = new RecipeProcess(stack, recipe);
        
        // 清除堆的脏状态
        stack.ClearDirty();
        activeProcesses.Add(process);
        
        Debug.Log($"触发配方{recipe.Actions}");
    }

    /// <summary>
    /// 执行一次完成的合成
    /// </summary>
    /// <param name="process"> 合成进程 </param>
    private void CompleteRecipe(RecipeProcess process){
        Recipe recipe = process.recipe;
        Stack stack = process.stack;
        IGetUsedCard getUsedCard = new GetUsedCard_所有卡牌();


        // 触发配方效果（先触发，防止卡牌被销毁导致无法触发或参数传递错误）
        foreach (var action in recipe.Actions)
        {
            CardActionSystem.instance.ExecuteCardAction(action, stack.Cards);
        }

        // 销毁使用卡牌
        foreach (var cardId in getUsedCard.GetUsedCardIds(stack, recipe.UsedCardIds))
        {
            CardSystem.instance.DestroyCard(CardSystem.instance.GetCard(cardId));
        }
    }
    private RecipeProcess GetProcess(Stack stack) => activeProcesses.FirstOrDefault(p => p.stack == stack);
    /// <summary>
    /// 获取堆的进度
    /// </summary>
    /// <param name="stack"></param>
    /// <returns></returns>
    public float GetStackProgress(Stack stack){
        var process = GetProcess(stack);
        if (process == null) return -1f;
        return process.elapsedTime / process.targetTime;
    }
}