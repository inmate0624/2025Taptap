using System.Collections.Generic;
using System.Linq;
using Base;
using UnityEngine;

public interface IStackSystem
{
    bool TryMerge(Card target, Card input);
    bool TryMerge(Stack target, Card input);
    bool TryMerge(Stack A_Stack, Stack B_Stack);
    Stack CreateNewStack(List<Card> cards);
}

/// <summary>
/// 卡堆系统
/// </summary>
public class StackSystem : SingletonBase<StackSystem>, IStackSystem
{

    private const float _offset = 1f;
    private static int _stackId = 0;
    public static int StackId => _stackId++;
    public static void ResetStackId() => _stackId = 0;
    public const float STACK_OFFSET = -0.8f;
    private readonly Dictionary<string, Stack> _stackDict = new();
    void Start()
    {

    }

    public bool TryMerge(Card target, Card input) => TryMerge(target.ParentStack, input.ParentStack);
    public bool TryMerge(Stack target, Card input) => TryMerge(target, input.ParentStack);
    // 尝试合并两个堆（先尝试简单堆叠，再尝试配方）
    public bool TryMerge(Stack target_Stack, Stack input_Stack)
    {
        if (target_Stack == null || input_Stack == null || target_Stack == input_Stack) return false;

        var topA = target_Stack.Bottom;
        var topB = input_Stack.Bottom;

        // 简单堆叠规则：同类型可叠
        if (topA.Id == topB.Id && topA.IsStackable && topB.IsStackable)
        {
            target_Stack.AddStack(input_Stack);
            Debug.Log("简单堆叠");
            return true;
        }

        // 检查是否有配方
        List<Card> combined = new();
        foreach (var card in target_Stack.Cards) combined.Add(card);
        foreach (var card in input_Stack.Cards) combined.Add(card);


        Recipe recipe = CardEventSystem.instance.FindMatch(combined, out List<Card> matchedCards);
        if (recipe != null)
        {
            List<Card> inputCards = new();
            inputCards.AddRange(matchedCards.ToList());
            CardEventSystem.instance.ExecuteRecipe(recipe, inputCards, target_Stack.Top.CardView.transform.position, out List<Card> outputCards);
            return true;
        }

        Debug.Log("TryMerge，但并未合成成功");
        return false;
    }
    public Stack CreateNewStack(List<Card> cards)
    {
        var stack = new Stack();
        var _stackPrefab = Resources.Load<GameObject>("Stack");
        StackView stackView = GameObject.Instantiate(_stackPrefab, Vector3.zero, Quaternion.identity).GetComponent<StackView>();   
        stackView.transform.position = cards[0].CardView.transform.position;
        stackView.Bind(stack);
        foreach (var card in cards)
        {
            stack.AddCard(card);
        }
        stackView.RefreshBounds();
        return stack;
    }
}