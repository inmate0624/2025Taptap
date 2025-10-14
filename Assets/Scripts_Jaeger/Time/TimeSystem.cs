using Base;
using UnityEngine;

/// <summary>
/// 时间系统：统一 tick（秒级）、天数推进与日终事件广播
/// 不直接驱动合成流程（由 CardEventSystem 自己在 Update 中用 Time.deltaTime 计时），
/// 仅提供全局时间源与“日终”事件，供喂食/超卡惩罚/结算等系统订阅。
/// </summary>
public class TimeSystem : SingletonBase<TimeSystem>
{
    // 配置
    [Tooltip("每个游戏日的时长（秒）")]
    public float dayDurationSeconds = 120f;

    // 运行时状态
    public int currentDay { get; private set; } = 1;
    public float timeInCurrentDay { get; private set; } = 0f; // 已经流逝的秒
    public bool isPaused { get; private set; } = false;

    // 秒级 tick 累积器（减少频繁事件广播）
    private float _secondAccumulator = 0f;

    void Update()
    {
        if (isPaused) return;

        float dt = Time.deltaTime;
        timeInCurrentDay += dt;
        _secondAccumulator += dt;

        // 每整秒广播一次 Tick（包含剩余秒数等）
        if (_secondAccumulator >= 1f)
        {
            int consume = Mathf.FloorToInt(_secondAccumulator);
            _secondAccumulator -= consume;

            int secondsElapsed = Mathf.FloorToInt(timeInCurrentDay);
            int secondsLeft = Mathf.Max(0, Mathf.CeilToInt(dayDurationSeconds - timeInCurrentDay));
            EventBus.Publish(new SecondTickEvent(currentDay, secondsElapsed, secondsLeft, GetDayProgress01()));
        }

        // 到达日终
        if (timeInCurrentDay >= dayDurationSeconds)
        {
            EndDayAndStartNext();
        }
    }

    /// <summary>
    /// 结束当前日并开始下一日，广播日终事件（供 Feeding/Board 等系统订阅）。
    /// </summary>
    private void EndDayAndStartNext()
    {
        // 对齐到整天末尾
        timeInCurrentDay = dayDurationSeconds;
        EventBus.Publish(new DayEndedEvent(currentDay));

        // 切换到下一天
        currentDay++;
        timeInCurrentDay = 0f;
        _secondAccumulator = 0f;
        EventBus.Publish(new DayStartedEvent(currentDay));
    }

    public void Pause() => isPaused = true;
    public void Resume() => isPaused = false;

    /// <summary>
    /// 重置为第 1 天起始。
    /// </summary>
    public void ResetDays(float newDayDurationSeconds = -1f)
    {
        if (newDayDurationSeconds > 0f) dayDurationSeconds = newDayDurationSeconds;
        currentDay = 1;
        timeInCurrentDay = 0f;
        _secondAccumulator = 0f;
    }

    /// <summary>
    /// 当天进度（0..1）。
    /// </summary>
    public float GetDayProgress01()
    {
        if (dayDurationSeconds <= 0f) return 0f;
        return Mathf.Clamp01(timeInCurrentDay / dayDurationSeconds);
    }
}

/// <summary>
/// 每秒 Tick 事件。用于 HUD 更新、倒计时提示等。
/// </summary>
public class SecondTickEvent
{
    public int Day { get; private set; }
    public int SecondsElapsed { get; private set; }
    public int SecondsLeft { get; private set; }
    public float DayProgress { get; private set; }
    public SecondTickEvent(int day, int secondsElapsed, int secondsLeft, float dayProgress)
    {
        Day = day;
        SecondsElapsed = secondsElapsed;
        SecondsLeft = secondsLeft;
        DayProgress = dayProgress;
    }
}

/// <summary>
/// 当前天数结束事件。供 FeedingSystem/BoardSystem 订阅做日终结算。
/// </summary>
public class DayEndedEvent
{
    public int Day { get; private set; }
    public DayEndedEvent(int day) { Day = day; }
}

/// <summary>
/// 新一天开始事件。可用于刷新每日任务、重置冷却等。
/// </summary>
public class DayStartedEvent
{
    public int Day { get; private set; }
    public DayStartedEvent(int day) { Day = day; }
}


