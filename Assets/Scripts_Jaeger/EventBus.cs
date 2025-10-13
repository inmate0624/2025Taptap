using System;
using System.Collections.Generic;
using UnityEngine;

public static class EventBus
{
    // 所有事件存放表
    private static readonly Dictionary<Type, List<Delegate>> _eventTable = new();
    private static readonly object _lock = new();

    /// <summary>
    /// 订阅事件
    /// </summary>
    public static void Subscribe<T>(Action<T> callback)
    {
        if (callback == null) return;
        lock (_lock)
        {
            var type = typeof(T);
            if (!_eventTable.ContainsKey(type))
                _eventTable[type] = new List<Delegate>();

            _eventTable[type].Add(callback);
        }
    }

    /// <summary>
    /// 取消订阅事件
    /// </summary>
    public static void Unsubscribe<T>(Action<T> callback)
    {
        if (callback == null) return;
        lock (_lock)
        {
            var type = typeof(T);
            if (_eventTable.TryGetValue(type, out var list))
            {
                list.Remove(callback);
                if (list.Count == 0)
                    _eventTable.Remove(type);
            }
        }
    }

    /// <summary>
    /// 发布事件（触发）
    /// </summary>
    public static void Publish<T>(T evt)
    {
        List<Delegate> listenersCopy;
        lock (_lock)
        {
            if (!_eventTable.TryGetValue(typeof(T), out var list)) return;
            listenersCopy = new List<Delegate>(list);
        }

        foreach (var del in listenersCopy)
        {
            (del as Action<T>)?.Invoke(evt);
        }
    }

    /// <summary>
    /// 清空所有事件
    /// </summary>
    /// 
    [RuntimeInitializeOnLoadMethod(RuntimeInitializeLoadType.BeforeSceneLoad)]
    public static void ClearAll()
    {
        lock (_lock)
        {
            _eventTable.Clear();
        }
    }
}
