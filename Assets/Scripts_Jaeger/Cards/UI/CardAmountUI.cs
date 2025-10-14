using TMPro;
using UnityEngine;

public class CardAmountUI : MonoBehaviour
{
    TextMeshProUGUI _text;
    void Awake()
    {
        _text = GetComponent<TextMeshProUGUI>();
    }
    void OnEnable()
    {
        EventBus.Subscribe<CardAmountChangeEvent>(OnCardAmountChange);
    }
    void OnDisable()
    {
        EventBus.Unsubscribe<CardAmountChangeEvent>(OnCardAmountChange);
    }
    void OnCardAmountChange(CardAmountChangeEvent evt)
    {
        _text.text = evt.CurrentCardCount.ToString() + "/" + evt.MaxCardCount.ToString();
    }
}
