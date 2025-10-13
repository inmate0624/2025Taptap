using System.Collections.Generic;
using System.Linq;
using UnityEngine;

/// <summary>
/// 配方数据层
/// </summary>
public class Recipe
{
    public string Id { get; }
    public List<string> Inputs { get; }
    public List<string> Outputs { get; }
    public float WorkTime { get; }
    public IGetUsedCard GetUsedCard { get; private set; }
    public IGenerateCard GetGenerateCard { get; private set; }
    public Recipe(string id, IEnumerable<string> inputs, IEnumerable<string> outputs, float workTime)
    {
        Id = id;
        Inputs = inputs.ToList();
        Outputs = outputs.ToList();
        WorkTime = workTime;

        InitStrategy();
    }

    public bool Matches(IEnumerable<string> cardIds)
    {
        var a = Inputs.OrderBy(x => x).ToList();
        var b = cardIds.OrderBy(x => x).ToList();
        if (a.Count != b.Count) return false;
        for (int i = 0; i < a.Count; i++)
            if (a[i] != b[i]) return false;
        return true;
    }

    // 根据配方类型初始化策略
    private void InitStrategy()
    {
        GetUsedCard = new GetUsedCard_所有卡牌();
        GetGenerateCard = new GenerateCard_默认();
    }
}