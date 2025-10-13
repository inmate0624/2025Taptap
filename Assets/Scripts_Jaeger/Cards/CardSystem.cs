
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
    private string NameToId(string name) => CardDataList.Find(data => data.Name == name).ID;
    public Card CreateCardByName(string name, Vector2 position) => CreateCardById(NameToId(name), position);
    public Card CreateCardById(string id, Vector2 position)
    {
        CardData cardData = CardDataList.Find(data => data.ID == id);
        Debug.Log($"创建卡牌{name}");

        var card = new Card(cardData);
        _cardPrefab = Resources.Load<GameObject>("Card");
        CardView cardView = GameObject.Instantiate(_cardPrefab, Vector3.zero, Quaternion.identity).GetComponent<CardView>();
        cardView.Bind(card);
        cardView.name = $"Card-{card.Name}-{card.Guid.Substring(0, 6)}";
        
        Stack stack = StackSystem.instance.CreateNewStack(new List<Card> { card });
        card.CardView.transform.SetParent(stack.StackView.transform);
        stack.StackView.transform.position = position;
        
        _cards.Add(card.Guid, card);
        return card;
    }

    public void DestroyCard(Card card)
    {
        _cards.Remove(card.Guid);
        card.Destroy();
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
}
