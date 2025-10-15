using System.Collections.Generic;
using TMPro;
using UnityEngine;

/// <summary>
/// 卡牌View层
/// </summary>
public class CardView : MonoBehaviour, IInputDetector
{
    private TextMeshPro _nameText;
    private TextMeshPro _GuidText;
    private TextMeshPro _StackText;
    private Collider2D _collider2D;
    public Card Card { get; private set; }
    public bool IsDragging = false;
    private List<CardView> _cardGroup = new();
    private Vector3 _dragOffset;
    private StackView _stackView => Card.ParentStack.StackView;

    public TMP_FontAsset FontAsset;
    
    void Awake()
    {
        _nameText = GetComponentInChildren<TextMeshPro>();
        _GuidText = transform.Find("Guid").GetComponent<TextMeshPro>();
        _StackText = transform.Find("Stack").GetComponent<TextMeshPro>();
        _collider2D = GetComponent<Collider2D>();
    }
    void Update()
    {
        OnDrag();
    }
    public void Bind(Card card)
    {
        card.CardView = this;
        Card = card;
        _nameText.text = card.Name;

        //为卡牌视图设置字体资产
        if (FontAsset is not null)
        {
            _nameText.font = FontAsset;
            _GuidText.font = FontAsset;
            _StackText.font = FontAsset;
        }
        
        Card.OnDestroy += OnCardDestroy;
        Card.OnStackChange += OnStackChange;
    }

    private void OnStackChange(){
        // 取前6位
        _GuidText.text = Card.Guid.Substring(0, 6);
        _StackText.text = Card.ParentStack.Id;
        if (Card.ParentStack.StackView != null){
            transform.SetParent(Card.ParentStack.StackView.transform);
            //TODO: 需要优化吗
            _collider2D.enabled = true;
            this.enabled = true;
        }
    }

    public void OnDragStart()
    {
        IsDragging = true;
        _stackView.CancelCollider();

        var mousePosition = Utility.GetMousePosition();
        _dragOffset = transform.position - mousePosition;

        _cardGroup = new List<CardView>();
        foreach (var card in Card.ParentStack.Cards){
            if (card.IndexInStack >= Card.IndexInStack){
                _cardGroup.Add(card.CardView);
            }
        }
        // 检测自己是否是堆的底部
        if (Card.IndexInStack != 1){
            SplitStack();
        }
    }    
    public void OnDrag()
    {
        if (!IsDragging) return;

        // Debug.Log($"OnDrag: {Card.GuidPrefix}");
        var mousePosition = Utility.GetMousePosition();
        var newPosition = mousePosition + _dragOffset;

        // 移动堆
        _stackView.transform.position = newPosition;
    }
    
    public void OnDragEnd()
    {
        IsDragging = false;


        MergeCard();

        //清除_cardGroup
        _cardGroup.Clear();

        if (_stackView != null) _stackView.EnableCollider();
    }

    private void MergeCard(){
        // 检测鼠标位置是否与另一个卡牌碰撞
        Vector3 worldPosition = Utility.GetMousePosition();
        Collider2D[] colliders = Physics2D.OverlapPointAll(worldPosition);
        foreach (var collider in colliders)
        {
            if (collider.gameObject == gameObject) continue;
            if (collider.gameObject.CompareTag("Card")){

                var otherCardView = collider.gameObject.GetComponent<CardView>();
                // 一定要是牌堆顶的卡牌
                if (otherCardView.Card.IndexInStack != otherCardView.Card.ParentStack.Cards.Count){
                    continue;
                }

                bool merged = StackSystem.instance.TryMerge(collider.gameObject.GetComponent<CardView>().Card, Card);
                if (merged){
                    Debug.Log("合并成功");
                }
                else{
                    Debug.Log("合并失败");
                }
            }
        }
    }
    private void SplitStack(){
        List<Card> cards = new();
        foreach (var card in Card.ParentStack.Cards){
            // 移动到新堆            
            if (card.IndexInStack >= Card.IndexInStack){
                cards.Add(card);
            }
        }
        _stackView.EnableCollider();
        StackSystem.instance.CreateNewStack(cards);
        _stackView.CancelCollider();
    }
    private void OnCardDestroy()
    {
        Destroy(gameObject);
    }
    public void OnPressStart()
    {
        Debug.Log($"OnPressStart: {Card.GuidPrefix}");
    }

    public void OnPressEnd()
    {
        Debug.Log($"OnPressEnd: {Card.GuidPrefix}");
    }

    public void OnClick()
    {
        Debug.Log("OnClick");
    }

    public void OnHold()
    {
        Debug.Log("OnHold");
    }
}