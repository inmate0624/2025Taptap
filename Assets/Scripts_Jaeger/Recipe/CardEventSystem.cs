using System.Collections.Generic;
using System.Linq;
using UnityEngine;

public class CardEventSystem
{
    private readonly CardSystem _cardSystem;
    private readonly List<Recipe> _recipes = new();

    public void RegisterRecipe(Recipe recipe) => _recipes.Add(recipe);
    public CardEventSystem(CardSystem cardSystem)
    {
        _cardSystem = cardSystem;
    }

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

    public void ExecuteRecipe(Recipe recipe, List<Card> inputCards, out List<Card> outputCards)
    {
        outputCards = new();   
        foreach (var card in inputCards)
        {
            _cardSystem.DestroyCard(card);
        }

        foreach (var card in recipe.Outputs)
        {
            outputCards.Add(_cardSystem.CreateCard(card, card, CardType.Resource, true));
        }
    }
}