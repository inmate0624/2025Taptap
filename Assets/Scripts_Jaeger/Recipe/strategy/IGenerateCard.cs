using UnityEngine;

public interface IGenerateCard{
    public void GenerateCard(Stack stack, Recipe recipe);
}

public class GenerateCard_默认 : IGenerateCard
{
    public void GenerateCard(Stack stack, Recipe recipe)
    {
        foreach (var card in recipe.Outputs)
        {
            CardSystem.instance.CreateCard(card, card, CardType.Resource, true, stack.StackView.transform.position);
        }
    }
}