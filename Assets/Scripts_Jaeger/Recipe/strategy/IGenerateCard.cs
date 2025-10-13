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
            CardSystem.instance.CreateCardById(card, stack.StackView.transform.position);
        }
    }
}