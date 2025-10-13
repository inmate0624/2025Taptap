
using System.Collections.Generic;
using Base;
using UnityEngine;

public interface ICardSystem
{
    Card CreateCard(string id, string name, CardType type, bool stackable, Vector2 position);
    void DestroyCard(Card card);
    void ShowAllCards();
}
public class CardSystem : SingletonBase<CardSystem>, ICardSystem
{
    private readonly List<Card> _cards = new();
    private GameObject _cardPrefab;
    private GameObject _stackPrefab;
    public Card CreateCard(string id, string name, CardType type, bool stackable, Vector2 position)
    {
        Debug.Log($"创建卡牌{name}");

        var card = new Card(id, name, type, stackable);
        _cardPrefab = Resources.Load<GameObject>("Card");
        CardView cardView = GameObject.Instantiate(_cardPrefab, Vector3.zero, Quaternion.identity).GetComponent<CardView>();
        cardView.Bind(card);
        cardView.name = $"Card-{card.Name}-{card.Guid.Substring(0, 6)}";
        
        var stack = new Stack();
        stack.AddCard(card);

        _stackPrefab = Resources.Load<GameObject>("Stack");
        StackView stackView = GameObject.Instantiate(_stackPrefab, Vector3.zero, Quaternion.identity).GetComponent<StackView>();    
        stackView.Bind(stack);
        stackView.RefreshBounds();

        card.CardView.transform.SetParent(stackView.transform);
        cardView.transform.position = position;
        
        _cards.Add(card);
        return card;
    }
    public void DestroyCard(Card card)
    {
        _cards.Remove(card);
        card.Destroy();
    }
    public IEnumerable<Card> AllCards => _cards;
    public void ShowAllCards()
    {
        Debug.Log("-----展示现有卡-----");
        foreach (var card in _cards)
        {
            Debug.Log($"{card.Name}");
        }
        Debug.Log("-----展示完毕-----");
    }
}
