using System;
using System.Collections.Generic;
using System.Linq;
using UnityEngine;

/// <summary>
/// 卡堆实例层
/// </summary>
public class Stack
{
    public readonly string Guid;
    public readonly string Id;
    private readonly List<Card> _cards = new List<Card>();
    public IReadOnlyList<Card> Cards => _cards;

    public StackView StackView { get; set; }
    // 堆销毁
    public Action OnDestroy { get; set; }
    // 堆变化    
    public Action OnStackChange { get; set; }
    private bool isDirty = false;
    public bool IsDirty => isDirty;
    public Stack(bool isAutoId = true)
    {
        Guid = System.Guid.NewGuid().ToString();
        Id = isAutoId ? StackSystem.StackId.ToString() : "-1";
    }
    public void AddCard(Card card)
    {
        if (_cards.Contains(card)) return;

        if (card.ParentStack != null && card.ParentStack != this){
            card.ParentStack.RemoveCard(card);
        }
        _cards.Add(card);
        card.IndexInStack = _cards.Count;
        card.ChangeStack(this);

        MarkDirty();
    }
    public void AddStack(Stack stack)
    {
        if (stack == null) return;
        List<Card> cards = new();
        foreach (var card in stack.Cards){
            cards.Add(card);
        }
        foreach (var card in cards){
            AddCard(card);
        }
        MarkDirty();
    }
    // 移除卡牌，可能是放进新堆
    public void RemoveCard(Card card, Stack newStack = null)
    {
        if (_cards.Remove(card)){
            if (newStack != null){
                card.ChangeStack(newStack);
            }
            else{
                card.ChangeStack(new Stack());
            }
        }
        if (_cards.Count == 0){
            Destroy();
            return;
        }
        MarkDirty();
    }
    public void Destroy()
    {
        MarkDirty();
        
        Debug.Log($"摧毁堆{Id}");
        foreach (var card in _cards){
            card.Destroy();
        }
        OnDestroy?.Invoke();
    }
    public void MarkDirty()
    {
        isDirty = true;
        OnStackChange?.Invoke();
    }
    public void ClearDirty() => isDirty = false;
    
    // 最底部卡牌
    public Card Bottom => _cards.Count > 0 ? _cards[^1] : null;
    // 最顶部卡牌
    public Card Top => _cards.Count > 0 ? _cards[_cards.Count - 1] : null;
}
