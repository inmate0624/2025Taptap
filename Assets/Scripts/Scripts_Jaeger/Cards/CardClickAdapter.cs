using UnityEngine;

/// <summary>
/// 轻量点击/双击检测，只在独立卡牌（所在堆仅1张）时触发
/// 不与拖拽冲突：发生明显位移则不视为点击
/// </summary>
public class CardClickAdapter : MonoBehaviour
{
    public float doubleClickThreshold = 0.25f;
    public float moveTolerance = 5f; // 屏幕像素

    private CardView _cardView;
    private float _lastClickTime = -10f;
    private Vector3 _pressScreenPos;
    private bool _pressed = false;

    void Awake()
    {
        _cardView = GetComponent<CardView>();
    }

    void Update()
    {
        // 简单输入：左键按下/抬起（沿用 IInputDetector 外部驱动也可，这里直接做）
        if (Input.GetMouseButtonDown(0))
        {
            // 命中自身 collider 才算
            var mouseWorld = Utility.GetMousePosition();
            var col = GetComponent<Collider2D>();
            if (col != null && col.OverlapPoint(mouseWorld))
            {
                _pressed = true;
                _pressScreenPos = Input.mousePosition;
            }
        }
        if (Input.GetMouseButtonUp(0) && _pressed)
        {
            _pressed = false;
            if (!IsSingleCard()) return; // 仅独立卡可触发
            if (_cardView != null && _cardView.IsDragging) return; // 拖拽中不触发
            if ((Input.mousePosition - _pressScreenPos).sqrMagnitude > moveTolerance * moveTolerance) return;

            float t = Time.time;
            if (t - _lastClickTime <= doubleClickThreshold)
            {
                // 双击
                _lastClickTime = -10f;
                CardEventSystem.instance.TriggerDoubleClick(_cardView.Card);
            }
            else
            {
                // 单击（延迟留给可能的第二击，这里直接触发即可，复杂需求可做协程延迟）
                _lastClickTime = t;
                // CardEventSystem.instance.TriggerClick(_cardView.Card);
            }
        }
    }

    private bool IsSingleCard()
    {
        if (_cardView == null || _cardView.Card == null || _cardView.Card.ParentStack == null) return false;
        return _cardView.Card.ParentStack.Cards.Count == 1;
    }
}


