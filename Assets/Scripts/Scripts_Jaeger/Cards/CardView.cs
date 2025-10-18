using System.Collections.Generic;
using System.Linq;
using DG.Tweening;
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
    private bool _hasMarkedDirty = false;
    public TMP_FontAsset FontAsset;
    
    // 用于控制渲染顺序
    [SerializeField]
    private List<TextMeshPro> TextMeshPros = new();
    [SerializeField]
    private List<SpriteRenderer> SpriteRenderers = new();

    // 用于记录卡牌状态
    public CardViewState _cardViewState;
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

        // 标记Stack为Dirty
        Card.ParentStack.MarkDirty();
        _hasMarkedDirty = true;

        var mousePosition = UtilityJaeger.GetMousePosition();
        _dragOffset = transform.position - mousePosition;

        _cardGroup = new List<CardView>();
        foreach (var card in Card.ParentStack.Cards){
            if (card.IndexInStack >= Card.IndexInStack){
                _cardGroup.Add(card.CardView);

                card.CardView.SetRenderersSortingOrder(3100);
            }
        }
        Stack oldStack = Card.ParentStack;
        bool hasSplitStack = false;
        // 检测自己是否是堆的底部
        if (Card.IndexInStack != 1){
            SplitStack();
            hasSplitStack = true;
        }

        // 设置拖拽中的卡牌列表
        CardSystem.instance.DraggingCardBoard.SetCards(_cardGroup.Select(c => c.Card).ToList());

        _cardViewState = new CardViewState(transform.position, hasSplitStack, oldStack);
    }    
    public void OnDrag()
    {
        if (!IsDragging) return;

        // Debug.Log($"OnDrag: {Card.GuidPrefix}");
        var mousePosition = UtilityJaeger.GetMousePosition();
        var newPosition = mousePosition + _dragOffset;

        // 移动堆
        _stackView.transform.position = newPosition;
    }
    
    public void OnDragEnd()
    {
        IsDragging = false;

        if (_hasMarkedDirty){
            _hasMarkedDirty = false;
            StackSystem.instance.RecheckStack(Card.ParentStack);
        }

        MergeCard();

        // 清除拖拽信息记录板
        CardSystem.instance.DraggingCardBoard.ClearCards();
        
        //清除_cardGroup
        foreach (var card in _cardGroup)
        {
            card.SetRenderersSortingOrder(0);
        }
        _cardGroup.Clear();

        if (_stackView != null) _stackView.EnableCollider();
    }

    private void MergeCard(){
        // 检测鼠标位置是否与另一个卡牌碰撞
        Vector3 worldPosition = UtilityJaeger.GetMousePosition();
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

    private void SetRenderersSortingOrder(int order)
    {
        foreach (var textMeshPro in TextMeshPros)
        {
            textMeshPro.sortingOrder = order;
        }
        foreach (var spriteRenderer in SpriteRenderers)
        {
            spriteRenderer.sortingOrder = order;
        }
    }
}

public class CardViewState{
    public Vector3 Position;
    public bool hasSplitStack;
    public Stack oldStack;
    public CardViewState(Vector3 position, bool hasSplitStack, Stack oldStack){
        Position = position;
        this.hasSplitStack = hasSplitStack;
        this.oldStack = oldStack;
    }

    public void Revert(CardView cardView){
        if (hasSplitStack){
            StackSystem.instance.TryMerge(oldStack, cardView.Card.ParentStack);
        }
        else{
            cardView.Card.ParentStack.StackView.CancelCollider();
            cardView.Card.ParentStack.StackView.transform.DOMove(Position, 0.2f).SetEase(Ease.OutSine).OnComplete(
                () => 
                {
                    cardView.Card.ParentStack.StackView.EnableCollider();
                }
            );
        }
    }
}
