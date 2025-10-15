
using System;
using cfg;
using UnityEngine;

/// <summary>
/// 卡牌实例层
/// </summary>
public class Card
{

    public string Id { get; private set; }
    public string Name { get; private set; }
    public CardType Type { get; private set; }
    public bool IsStackable { get; private set; }

    // Runtime
    public readonly string Guid;
    public int IndexInStack { get; set; }
    public Action OnDestroy { get; set; }
    public Action OnStackChange { get; set; }
    public Stack ParentStack { get; private set; }
    public CardView CardView { get; set; }
    // 字段
    public bool isTop => IndexInStack == ParentStack.Cards.Count;
    public bool isBottom => IndexInStack == 1;
    public Card(CardData cardData)
    {
        Guid = System.Guid.NewGuid().ToString();
        Id = cardData.ID;
        Name = cardData.Name;
        Type = CardType.Resource;
        IsStackable = true;
    }

    public override string ToString() => $"{Name} ({Id}) ({Guid})";
    public void ChangeStack(Stack stack)
    {
        ParentStack = stack;
        OnStackChange?.Invoke();
    }
    public void Destroy()
    {
        ParentStack.RemoveCard(this);
        OnDestroy?.Invoke();
    }

    public string GuidPrefix => Guid.Substring(0, 6);
}

public enum CardType
{
    Resource,
    Building,
    Human,
    Enemy,
    Other
}