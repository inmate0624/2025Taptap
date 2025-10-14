using Base;
using UnityEngine;

/// <summary>
/// 全局经济系统：维护金币并广播变更事件，与购买卡牌无关
/// </summary>
public class EconomySystem : SingletonBase<EconomySystem>
{
    [SerializeField]
    private int _gold = 0;
    public int Gold => _gold;
    public override void Awake()
    {
        base.Awake();
        // 初始广播一次，便于 UI 立即刷新
        EventBus.Publish(new GoldChangedEvent(_gold));
    }
    public bool CanAfford(int amount)
    {
        return amount <= _gold;
    }
    public bool SpendGold(int amount)
    {
        if (amount <= 0) return true;
        if (!CanAfford(amount)) return false;
        _gold -= amount;
        EventBus.Publish(new GoldChangedEvent(_gold));
        return true;
    }
    public void AddGold(int amount)
    {
        if (amount == 0) return;
        _gold = Mathf.Max(0, _gold + amount);
        EventBus.Publish(new GoldChangedEvent(_gold));
    }
    public void SetGold(int value)
    {
        _gold = Mathf.Max(0, value);
        EventBus.Publish(new GoldChangedEvent(_gold));
    }
}

public class GoldChangedEvent
{
    public int NewGold { get; private set; }
    public GoldChangedEvent(int newGold)
    {
        NewGold = newGold;
    }
}


