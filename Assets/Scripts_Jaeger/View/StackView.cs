using UnityEngine;

public class StackView : MonoBehaviour
{
    public Stack Stack { get; private set; }
    private BoxCollider2D _collider2D;

    private bool _isDragging = false;
    void Awake()
    {
        _collider2D = GetComponent<BoxCollider2D>();
    }
    public void Bind(Stack stack)
    {
        Stack = stack;
        Stack.StackView = this;

        Stack.OnDestroy += OnStackDestroy;
    }

    public void RefreshBounds(){
        if (Stack == null || Stack.Cards.Count == 0){
            Debug.LogError("Stack is null or has no cards");
            return;
        };
        float height = Stack.Cards.Count * (-StackSystem.STACK_OFFSET);
        _collider2D.size = new Vector2(1f, height + 1f);
        _collider2D.offset = new Vector2(0, 0);
    }

    private void OnStackDestroy()
    {
        Destroy(gameObject);
    }
}