
using System;
using UnityEngine;

public class Card
{
    public string Guid { get; private set; }
    public string Id { get; private set; }
    public string Name { get; private set; }
    public CardType Type { get; private set; }
    public bool IsStackable { get; private set; }

    public Stack ParentStack { get; private set; }
    public int IndexInStack { get; set; }
    public Action OnDestroy { get; set; }
    public Action OnStackChange { get; set; }
    public CardView CardView { get; set; }
    public Card(string id, string name, CardType type, bool stackable)
    {
        Guid = System.Guid.NewGuid().ToString();
        Id = id;
        Name = name;
        Type = type;
        IsStackable = stackable;
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