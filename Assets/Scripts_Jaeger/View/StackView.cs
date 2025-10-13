using UnityEditor;
using UnityEngine;
using UnityEngine.UIElements;

/// <summary>
/// 卡堆View层
/// </summary>
public class StackView : MonoBehaviour
{
    public Stack Stack { get; private set; }
    private BoxCollider2D _collider2D;

    Vector2 _originalOffset;
    void Awake()
    {
        _collider2D = GetComponent<BoxCollider2D>();
    }
    void Update()
    {
        //TODO: 修改卡牌位置（其实不用持续更新？）
        UpdateCardsPosition();
    }

    private void UpdateCardsPosition(){
        foreach (var card in Stack.Cards){
            card.CardView.transform.localPosition = new Vector3(0, (card.IndexInStack-1) * StackSystem.STACK_OFFSET, 0);
        }
    }

    public void CancelCollider() => _collider2D.enabled = false;
    public void EnableCollider() => _collider2D.enabled = true;
    
    public void Bind(Stack stack)
    {
        Stack = stack;
        Stack.StackView = this;

        Stack.OnDestroy += OnStackDestroy;
        Stack.OnStackChange += OnStackChange;
    }

    public void RefreshBounds(){
        if (Stack == null || Stack.Cards.Count == 0){
            Debug.LogWarning("Stack is null or has no cards");
            return;
        };
        float height = (Stack.Cards.Count-1) * (-StackSystem.STACK_OFFSET);
        _collider2D.size = new Vector2(1f, height + 1f);
        _collider2D.offset = new Vector2(0, -height/2);
    }

    public void OnStackChange(){
        // 同步Stack位置到最底部卡牌的位置
        RefreshBounds();
    }

    private void OnStackDestroy()
    {
        Destroy(gameObject);
    }

    void OnDrawGizmos()
    {
        if (!EditorApplication.isPlaying) return;
        // 绘制Collider的边界
        Gizmos.color = Color.red;
        Gizmos.DrawWireCube(transform.position + new Vector3(_collider2D.offset.x, _collider2D.offset.y, 0), _collider2D.size);
    }
}