using UnityEngine;

/// <summary>
/// 掉落位置策略接口（策略模式）
/// </summary>
public interface ISpawnPositionStrategy
{
    Vector2[] GetSpawnPositions(Vector2 center, int count);
}

/// <summary>
/// 默认：以 center 为中心，半径 0.5 的随机散布
/// </summary>
public class RandomCircleSpawnStrategy : ISpawnPositionStrategy
{
    private readonly float _radius;
    public RandomCircleSpawnStrategy(float radius = 0.5f)
    {
        _radius = radius;
    }
    public Vector2[] GetSpawnPositions(Vector2 center, int count)
    {
        var result = new Vector2[count];
        for (int i = 0; i < count; i++)
        {
            float angle = UnityEngine.Random.Range(0f, Mathf.PI * 2f);
            float r = UnityEngine.Random.Range(0f, _radius);
            result[i] = center + new Vector2(Mathf.Cos(angle), Mathf.Sin(angle)) * r;
        }
        return result;
    }
}