using cfg;
using TMPro;
using UnityEngine;

public class CoinUI : MonoBehaviour
{
    private TextMeshProUGUI _text;
    private int _coin = 0;
    public int Coin{
        get => _coin;
        set{
            if (value < 0){
                Debug.LogError("Coin cannot be less than 0");
                return;
            }
            _coin = value;
            _text.text = "Coin: " + _coin.ToString();
        }
    }

    void Awake()
    {
        _text = GetComponent<TextMeshProUGUI>();
        Coin = 0;
    }
    void Start()
    {

    }
    void OnEnable()
    {
        EventBus.Subscribe<AddCardEvent>(OnAddCard);
        EventBus.Subscribe<RemoveCardEvent>(OnRemoveCard);
    }
    void OnDisable()
    {
        EventBus.Unsubscribe<AddCardEvent>(OnAddCard);
        EventBus.Unsubscribe<RemoveCardEvent>(OnRemoveCard);
    }

    void OnAddCard(AddCardEvent evt)
    {
        if (evt.Card.DataType == CardType.金币){
            Coin ++;
        }
    }

    void OnRemoveCard(RemoveCardEvent evt)
    {
        if (evt.Card.DataType == CardType.金币){
            Coin --;
        }
    }
}