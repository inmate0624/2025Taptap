using System.Collections.Generic;
using System.Linq;
using cfg;
using UnityEngine;

/// <summary>
/// 配方数据层
/// </summary>
public class Recipe
{
    public string Id { get; }
    public string Description { get; }
    public List<string> InputIds { get; }
    public List<string> UsedCardIds { get; }
    public List<CardAction> Actions { get; }
    public bool IsStrict { get; }
    public float WorkTime { get; }
    public Recipe(RecipeData recipeData)
    {
        Id = recipeData.ID;
        Description = recipeData.Description;
        InputIds = recipeData.InputList.ToList();
        UsedCardIds = recipeData.UsedCardList.ToList();
        Actions = recipeData.Actions.ToList();
        IsStrict = recipeData.IsStrict;
        WorkTime = recipeData.WorkTime;
    }

    public bool Matches(IEnumerable<string> cardIds)
    {
        if (IsStrict)
        {
            // 严格顺序匹配
            return InputIds.OrderBy(x => x).SequenceEqual(cardIds.OrderBy(x => x));
        }
        else{
            // 非严格顺序匹配（只匹配数量和内容）
            var a = InputIds.OrderBy(x => x).ToList();
            var b = cardIds.OrderBy(x => x).ToList();
            if (a.Count != b.Count) return false;
            for (int i = 0; i < a.Count; i++)
                if (a[i] != b[i]) return false;
            return true;
        }

    }
}