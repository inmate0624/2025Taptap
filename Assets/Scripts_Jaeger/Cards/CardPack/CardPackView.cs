using UnityEngine;

public class CardPackView : MonoBehaviour
{
    CardPack _cardPack;

    public void Bind(CardPack cardPack)
    {
        _cardPack = cardPack;
    }
    private void OnClick(){
        foreach (var cardId in _cardPack.CardIds){
            CardSystem.instance.CreateCard(cardId.ToString(), cardId.ToString(), CardType.Resource, true, transform.position);
        }
    }
}
