using Base;
using System.Collections.Generic;

public class CardEventSystem : SingletonBase<CardEventSystem>{

    private readonly Dictionary<string, System.Action<Card>> _clickHandlers = new();
    private readonly Dictionary<string, System.Action<Card>> _doubleClickHandlers = new();
        public void RegisterClickHandler(string cardId, System.Action<Card> handler)
    {
        if (string.IsNullOrEmpty(cardId) || handler == null) return;
        _clickHandlers[cardId] = handler;
    }
    public void RegisterDoubleClickHandler(string cardId, System.Action<Card> handler)
    {
        if (string.IsNullOrEmpty(cardId) || handler == null) return;
        _doubleClickHandlers[cardId] = handler;
    }
    public void TriggerClick(Card card)
    {
        if (card == null) return;
        if (_clickHandlers.TryGetValue(card.Id, out var handler)) handler?.Invoke(card);
    }
    public void TriggerDoubleClick(Card card)
    {
        if (card == null) return;
        if (_doubleClickHandlers.TryGetValue(card.Id, out var handler)) handler?.Invoke(card);
    }
}