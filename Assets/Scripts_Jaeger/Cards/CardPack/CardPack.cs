using System.Collections.Generic;
using System.Linq;
using UnityEngine;


/// <summary>
/// 卡牌包实例层
/// </summary>
public class CardPack
{
    public string Guid { get; private set; }
    public List<int> CardIds { get; private set; }
    public CardPack(List<int> cardIds)
    {
        Guid = System.Guid.NewGuid().ToString();
        CardIds = cardIds;
    }
}
