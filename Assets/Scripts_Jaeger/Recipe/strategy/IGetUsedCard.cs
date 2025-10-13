using System.Collections.Generic;
using System.Linq;

public interface IGetUsedCard{
    public List<string> GetUsedCardIds(Stack stack, Recipe recipe);
}

public class GetUsedCard_所有卡牌 : IGetUsedCard
{
    public List<string> GetUsedCardIds(Stack stack, Recipe recipe)
    {
        return stack.Cards.Select(c => c.Guid).ToList();
    }
}