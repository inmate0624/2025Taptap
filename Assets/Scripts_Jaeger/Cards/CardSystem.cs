
using System.Collections.Generic;
using Base;
using cfg;
using UnityEngine;


/// <summary>
/// 卡牌系统
/// </summary>
public class CardSystem : SingletonBase<CardSystem>
{
    private readonly Dictionary<string, Card> _cards = new();
    private GameObject _cardPrefab;
    private GameObject _stackPrefab;
    public List<CardData> CardDataList => DataManager.GetAllCardData();
    public int MaxCardCount {get; private set;} = 10;
    public int CurrentCardCount {get; private set;} = 0;
    private string NameToId(string name) => CardDataList.Find(data => data.Name == name).ID;
    public Card CreateCardByName(string name, Vector2 position) => CreateCardById(NameToId(name), position);
    public Card CreateCardById(string id, Vector2 position)
    {
        // 获取卡牌数据
        CardData cardData = CardDataList.Find(data => data.ID == id);
        Debug.Log($"创建卡牌{name}");

        // 创建卡牌
        var card = new Card(cardData);
        
        // 创建卡牌View
        _cardPrefab = Resources.Load<GameObject>("Card");
        CardView cardView = GameObject.Instantiate(_cardPrefab, Vector3.zero, Quaternion.identity).GetComponent<CardView>();
        cardView.Bind(card);
        cardView.name = $"Card-{card.Name}-{card.Guid.Substring(0, 6)}";
        
        // 创建卡堆
        Stack stack = StackSystem.instance.CreateNewStack(new List<Card> { card });
        card.CardView.transform.SetParent(stack.StackView.transform);
        stack.StackView.transform.position = position;
        
        // 添加到卡牌列表
        _cards.Add(card.Guid, card);
        CurrentCardCount++;

        // 发布卡牌数量变化事件
        EventBus.Publish(new CardAmountChangeEvent(MaxCardCount, CurrentCardCount));
        return card;
    }
    public Card RandomCreateCard(Vector2 position) => CreateCardById(CardDataList[Random.Range(0, CardDataList.Count)].ID, position);
    public void DestroyCard(Card card)
    {
        _cards.Remove(card.Guid);
        card.Destroy();
        CurrentCardCount--;
        EventBus.Publish(new CardAmountChangeEvent(MaxCardCount, CurrentCardCount));
    }
    public Card GetCard(string Guid) => _cards[Guid];
    public IEnumerable<Card> AllCards => _cards.Values;
    public void ShowAllCards()
    {
        Debug.Log("-----展示现有卡-----");
        foreach (var card in _cards)
        {
            Debug.Log($"{card.Value.Name} {card.Value.GuidPrefix}");
        }
        Debug.Log("-----展示完毕-----");
    }

    public void ChangeMaxCardCount(int count){
        MaxCardCount = count;
        EventBus.Publish(new CardAmountChangeEvent(MaxCardCount, CurrentCardCount));
    }
}


public class CardAmountChangeEvent{
    public int MaxCardCount {get; private set;}
    public int CurrentCardCount {get; private set;}
    public CardAmountChangeEvent(int maxCardCount, int currentCardCount){
        MaxCardCount = maxCardCount;
        CurrentCardCount = currentCardCount;
    }
}