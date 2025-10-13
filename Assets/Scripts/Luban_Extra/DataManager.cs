using cfg;
using SimpleJSON;
using UnityEngine;

public static class DataManager
{
    private static Tables _tables;

    public static void GenerateData()
    {
        _tables = new Tables(GetData);
    }

    private static JSONNode GetData(string tableName){
        var textAsset = Resources.Load<TextAsset>("Config/" + tableName);
        return JSON.Parse(textAsset.text);
    }
}