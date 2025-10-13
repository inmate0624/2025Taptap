using System.Collections.Generic;
using System.Linq;
using UnityEngine;

public class Recipe
{
    public string Id { get; }
    public List<string> Inputs { get; }
    public List<string> Outputs { get; }
    public float WorkTime { get; }

    public Recipe(string id, IEnumerable<string> inputs, IEnumerable<string> outputs, float workTime = 0)
    {
        Id = id;
        Inputs = inputs.ToList();
        Outputs = outputs.ToList();
        WorkTime = workTime;
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
}