using UnityEngine;
using UnityEngine.UI;
using UnityEngine.Events;

/// <summary>
/// 成就条目视图组件：负责单个列表项的标题显示、解锁状态指示与点击回调。
/// 预制体需至少包含一个 Button 和可选的 Text；若无 Text，本组件会创建一个。
/// </summary>
public class AchievementItemView : MonoBehaviour
{
    [SerializeField] private Button button;
    [SerializeField] private Text titleText;
    [SerializeField] private Image background;

    private Color normalColor = new Color(1f, 1f, 1f, 1f);
    private Color selectedColor = new Color(0.85f, 0.92f, 1f, 1f);
    private Color lockedTextColor = new Color(0.5f, 0.5f, 0.5f, 1f);
    private Color unlockedTextColor = new Color(0.1f, 0.1f, 0.1f, 1f);

    public void Initialize(string title, bool unlocked, UnityAction onClick)
    {
        if (button == null) button = GetComponent<Button>();
        if (background == null) background = GetComponent<Image>();
        if (titleText == null)
        {
            titleText = GetComponentInChildren<Text>();
            if (titleText == null)
            {
                var go = new GameObject("Title", typeof(RectTransform));
                go.transform.SetParent(transform, false);
                titleText = go.AddComponent<Text>();
                titleText.alignment = TextAnchor.MiddleCenter;
                titleText.raycastTarget = false;
                var rt = (RectTransform)go.transform;
                rt.anchorMin = new Vector2(0f, 0f);
                rt.anchorMax = new Vector2(1f, 1f);
                rt.offsetMin = Vector2.zero;
                rt.offsetMax = Vector2.zero;
            }
        }

        titleText.text = title;
        titleText.color = unlocked ? unlockedTextColor : lockedTextColor;

        if (button != null)
        {
            button.onClick.RemoveAllListeners();
            if (onClick != null) button.onClick.AddListener(onClick);
        }

        SetSelected(false);
    }

    public void SetSelected(bool selected)
    {
        if (background != null)
        {
            background.color = selected ? selectedColor : normalColor;
        }
    }
}


