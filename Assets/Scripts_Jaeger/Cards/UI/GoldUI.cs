using TMPro;
using UnityEngine;

/// <summary>
/// 最小金币显示 UI：订阅 GoldChangedEvent 并显示当前金币
/// </summary>
public class GoldUI : MonoBehaviour
{
    private TextMeshProUGUI _text;

    void Awake()
    {
        _text = GetComponent<TextMeshProUGUI>();
    }

    void OnEnable()
    {
        EventBus.Subscribe<GoldChangedEvent>(OnGoldChanged);
        // 主动刷新一次（处理脚本启用时已存在的金币）
        if (EconomySystem.instance != null)
        {
            OnGoldChanged(new GoldChangedEvent(EconomySystem.instance.Gold));
        }
    }

    void OnDisable()
    {
        EventBus.Unsubscribe<GoldChangedEvent>(OnGoldChanged);
    }

    void OnGoldChanged(GoldChangedEvent evt)
    {
        if (_text == null) return;
        _text.text = "金币: " + evt.NewGold.ToString();
    }
}


