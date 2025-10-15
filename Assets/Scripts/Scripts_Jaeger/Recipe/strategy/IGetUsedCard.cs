using System.Collections.Generic;
using System.Linq;

public interface IGetUsedCard{
    public List<string> GetUsedCardIds(Stack stack, List<string> usedCardIds);
}

public class GetUsedCard_所有卡牌 : IGetUsedCard
{
    public List<string> GetUsedCardIds(Stack stack, List<string> usedCardIds)
    {
        List<string> usedCardGuids = new();
        // 从Stack中获取匹配的卡牌
        foreach (var card in stack.Cards)
        {
            if (usedCardIds.Contains(card.Id))
            {
                usedCardGuids.Add(card.Guid);
            }
        }
        return usedCardGuids;
    }
}