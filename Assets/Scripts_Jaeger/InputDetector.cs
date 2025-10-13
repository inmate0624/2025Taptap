using UnityEngine;
public interface IInputDetector
{
    void OnPressStart();
    void OnPressEnd();
    void OnDragStart();
    void OnDrag();
    void OnDragEnd();
    void OnClick();
    void OnHold();
}

public class MouseInputDetector : MonoBehaviour
{
    [SerializeField] private float clickThreshold = 0.2f;   // 单击最大持续时间
    [SerializeField] private float holdThreshold = 0.5f;    // 长按最小持续时间
    [SerializeField] private float dragThreshold = 0.1f;    // 拖拽最小移动距离（世界坐标）

    private Vector2 _mouseDownPos;
    private float _mouseDownTime;
    private bool _isPressing;
    private bool _isDragging;
    private CardView _selectedCard;

    void Update()
    {
        if (Input.GetMouseButtonDown(0))
        {
            _mouseDownTime = Time.time;
            _mouseDownPos = Camera.main.ScreenToWorldPoint(Input.mousePosition);
            _isPressing = true;
            _isDragging = false;



            var hit = Physics2D.Raycast(_mouseDownPos, Vector2.zero);
            if (hit.collider != null)
            {
                _selectedCard = hit.collider.GetComponent<CardView>();

                // 开始点击
                _selectedCard?.OnPressStart();
            }
        }

        if (_isPressing)
        {
            Vector2 mouseNow = Camera.main.ScreenToWorldPoint(Input.mousePosition);
            float moveDist = Vector2.Distance(mouseNow, _mouseDownPos);
            float pressTime = Time.time - _mouseDownTime;

            // 拖拽
            if (!_isDragging && moveDist > dragThreshold)
            {
                _isDragging = true;
                // 开始拖拽
                _selectedCard?.OnDragStart();
            }

            if (_isDragging)
            {
                // 拖拽
                _selectedCard?.OnDrag();
            }

            // 长按
            if (!_isDragging && pressTime > holdThreshold)
            {
                // 长按
                _selectedCard?.OnHold();
                _isPressing = false; // 触发一次即可
            }

            // 松开
            if (Input.GetMouseButtonUp(0))
            {
                _isPressing = false;
                // 结束点击
                _selectedCard?.OnPressEnd();

                if (!_isDragging && pressTime <= clickThreshold)
                    // 点击
                    _selectedCard?.OnClick();
                else if (_isDragging)
                    // 结束拖拽
                    _selectedCard?.OnDragEnd();

                _selectedCard = null;
            }
        }
    }
}
