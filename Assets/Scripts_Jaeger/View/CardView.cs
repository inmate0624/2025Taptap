using System.Collections.Generic;
using TMPro;
using UnityEngine;

public class CardView : MonoBehaviour, IInputDetector
{
    private TextMeshPro _nameText;
    private TextMeshPro _GuidText;
    private TextMeshPro _StackText;
    private Collider2D _collider2D;
    private Rigidbody2D _rigidbody2D;
    public Card Card { get; private set; }
    private bool _isDragging = false;

    private List<CardView> _cardGroup;
    private Vector3 _dragOffset;
    void Awake()
    {
        _nameText = GetComponentInChildren<TextMeshPro>();
        _GuidText = transform.Find("Guid").GetComponent<TextMeshPro>();
        _StackText = transform.Find("Stack").GetComponent<TextMeshPro>();
        _collider2D = GetComponent<Collider2D>();
        _rigidbody2D = GetComponent<Rigidbody2D>();
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
        // 设置图标、显示文本等

        Card.OnDestroy += OnCardDestroy;
        Card.OnStackChange += OnStackChange;
    }
    private void OnStackChange(){
        // 取前6位
        _GuidText.text = Card.Guid.Substring(0, 6);
        _StackText.text = Card.ParentStack.Id;
        if (Card.ParentStack.StackView != null){
            transform.SetParent(Card.ParentStack.StackView.transform);

            //TODO: 需要优化
            _collider2D.enabled = true;
            this.enabled = true;
        }
    }
    public void OnDragStart()
    {
        _isDragging = true;
        // Debug.Log($"OnDragStart: {Card.GuidPrefix}");

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
        if (!_isDragging) return;

        Debug.Log($"OnDrag: {Card.GuidPrefix}");
        var mousePosition = Utility.GetMousePosition();
        var newPosition = mousePosition + _dragOffset;


        for (int i = 0; i < _cardGroup.Count; i++)
        {
            _cardGroup[i].transform.position = newPosition + new Vector3(0, i * StackSystem.STACK_OFFSET, 0);
        }
    }
    public void OnDragEnd()
    {
        _isDragging = false;
        // Debug.Log($"OnDragEnd: {Card.GuidPrefix}");

        // 检测鼠标位置是否与另一个卡牌碰撞
        Vector3 mousePosition = Input.mousePosition;
        mousePosition.z = - Camera.main.transform.position.z;
        Vector3 worldPosition = Camera.main.ScreenToWorldPoint(mousePosition);
        Collider2D[] colliders = Physics2D.OverlapPointAll(worldPosition);

        foreach (var collider in colliders)
        {
            if (collider.gameObject == gameObject) continue;
            if (collider.gameObject.CompareTag("Card")){
                bool merged = StackSystem.instance.TryMerge(collider.gameObject.GetComponent<CardView>().Card, Card);
                if (merged){
                    Debug.Log("合并成功");
                }
                else{
                    Debug.Log("合并失败");
                }
            }
        }

        //清除_cardGroup
        _cardGroup.Clear();
    }
    private void SplitStack(){
        List<Card> cards = new();
        foreach (var card in Card.ParentStack.Cards){
            // 移动到新堆            
            if (card.IndexInStack >= Card.IndexInStack){
                cards.Add(card);
            }
        }
        StackSystem.instance.CreateNewStack(cards);
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