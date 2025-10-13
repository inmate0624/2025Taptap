using System;
using System.Collections.Generic;
using System.Linq;
using UnityEngine;

/// <summary>
/// 卡堆实例层
/// </summary>
public class Stack
{
    public readonly string Id;
    private readonly List<Card> _cards = new List<Card>();
    public IReadOnlyList<Card> Cards => _cards;
    public Stack(bool isAutoId = true) => Id = isAutoId ? StackSystem.StackId.ToString() : "-1";
    public StackView StackView { get; set; }

    // 堆销毁
    public Action OnDestroy { get; set; }
    // 堆变化    
    public Action OnStackChange { get; set; }

    public void AddCard(Card card)
    {
        if (_cards.Contains(card)) return;

        if (card.ParentStack != null && card.ParentStack != this){
            card.ParentStack.RemoveCard(card);
        }
        _cards.Add(card);
        card.IndexInStack = _cards.Count;
        card.ChangeStack(this);
        OnStackChange?.Invoke();
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

        OnStackChange?.Invoke();
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

        OnStackChange?.Invoke();

        if (_cards.Count == 0){
            Destroy();
        }
    }
    public void Destroy()
    {
        OnStackChange?.Invoke();
        
        Debug.Log($"摧毁堆{Id}");
        foreach (var card in _cards){
            card.Destroy();
        }
        OnDestroy?.Invoke();
    }
    // 最底部卡牌
    public Card Bottom => _cards.Count > 0 ? _cards[^1] : null;
    // 最顶部卡牌
    public Card Top => _cards.Count > 0 ? _cards[_cards.Count - 1] : null;
}
