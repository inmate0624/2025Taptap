using UnityEditor;
using UnityEngine;

public class StackView : MonoBehaviour
{
    public Stack Stack { get; private set; }
    [SerializeField]
    private BoxCollider2D _collider2D;
    [SerializeField]
    private Transform _colliderTransform;
    Vector2 _originalOffset;
    private bool _isDragging = false;
    void Awake()
    {
        _collider2D = transform.Find("StackCollider").GetComponent<BoxCollider2D>();
        _colliderTransform = transform.Find("StackCollider");
    }
    void Update()
    {
        _originalOffset = Stack.Top.CardView.transform.position;

        _colliderTransform.position = _originalOffset;
    }
    public void Bind(Stack stack)
    {
        Stack = stack;
        Stack.StackView = this;

        Stack.OnDestroy += OnStackDestroy;
        Stack.OnChange += OnStackChange;
    }

    public void RefreshBounds(){
        if (Stack == null || Stack.Cards.Count == 0){
            Debug.LogError("Stack is null or has no cards");
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
        Gizmos.DrawWireCube(_colliderTransform.position, _collider2D.size);
    }
}