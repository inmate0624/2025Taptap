using System.Collections.Generic;
using System.Linq;
using Base;
using UnityEngine;

/// <summary>
/// 卡牌事件系统（包括配方、单击、长按等）
/// </summary>
public class CardEventSystem : SingletonBase<CardEventSystem>
{
    private readonly List<Recipe> _recipes = new();

    public void RegisterRecipe(Recipe recipe) => _recipes.Add(recipe);

    public Recipe FindMatch(List<Card> cards, out List<Card> matchedCards)
    {
        var ids = cards.Select(c => c.Id);
        matchedCards = new();
        Recipe recipe = _recipes.FirstOrDefault(r => r.Matches(ids));
        if (recipe == null) return null;
        foreach (var id in recipe.Inputs)
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

    public void ExecuteRecipe(Recipe recipe, List<Card> inputCards,Vector2 position, out List<Card> outputCards)
    {
        // 等待时间
        float waitTime = recipe.WorkTime;



        Debug.Log($"执行配方{recipe.Id}，生成位置：{position}");
        outputCards = new();   
        foreach (var card in inputCards)
        {
            CardSystem.instance.DestroyCard(card);
        }

        foreach (var card in recipe.Outputs)
        {
            outputCards.Add(CardSystem.instance.CreateCard(card, card, CardType.Resource, true, position));
        }
    }
}