using Base;
using cfg;
using System.Collections.Generic;
using UnityEngine;

public class CardEventSystem : SingletonBase<CardEventSystem>{

    // 本质上是注册规则，根据规则触发事件
    private readonly Dictionary<string, CardEventData> _doubleClickHandlers = new();
    void Start()
    {
        DataManager.GetAllCardEventData().ForEach(eventData => RegisterCardEvent(eventData));
    }
    public void RegisterCardEvent(CardEventData eventData)
    {
        if (string.IsNullOrEmpty(eventData.CardId) || eventData == null) return;
        Debug.Log($"注册事件：{eventData.CardId}-{eventData.TriggerType}");
        switch (eventData.TriggerType){
            case CardEventType.双击:
                _doubleClickHandlers[eventData.CardId] = eventData;
                break;
            default:
                break;
        }
    }
    public void TriggerDoubleClick(Card card)
    {
        Debug.Log($"触发双击{card.Name}-{card.GuidPrefix}");
        if (card == null) return;
        if (_doubleClickHandlers.TryGetValue(card.Id, out var handler)){
            foreach (var action in handler.Actions){
                CardActionSystem.instance.ExecuteCardAction(action, new List<Card>{card});
            }
        }
    }
}