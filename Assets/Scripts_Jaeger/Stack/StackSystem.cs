using System.Collections.Generic;
using System.Linq;
using Base;
using UnityEngine;

public interface IStackSystem
{
    bool TryMerge(Card target, Card input);
    bool TryMerge(Stack target, Card input);
    bool TryMerge(Stack A_Stack, Stack B_Stack);
    void UpdateStackView(StackChangeEvent evt);
}


public class StackSystem : SingletonBase<StackSystem>, IStackSystem
{

    private const float _offset = 1f;
    private static int _stackId = 0;
    public static int StackId => _stackId++;
    public static void ResetStackId() => _stackId = 0;
    public const float STACK_OFFSET = -0.8f;

    void Start()
    {
        EventBus.Subscribe<StackChangeEvent>(UpdateStackView);
    }

    public bool TryMerge(Card target, Card input) => TryMerge(target.ParentStack, input.ParentStack);
    public bool TryMerge(Stack target, Card input) => TryMerge(target, input.ParentStack);
    public bool TryMerge(Stack A_Stack, Stack B_Stack)
    {
        if (A_Stack == null || B_Stack == null || A_Stack == B_Stack) return false;

        var topA = A_Stack.Top;
        var topB = B_Stack.Top;

        // 简单堆叠规则：同类型可叠
        if (topA.Id == topB.Id && topA.IsStackable && topB.IsStackable)
        {
            A_Stack.AddStack(B_Stack);
            Debug.Log("简单堆叠");
            return true;
        }

        // 检查是否有配方
        List<Card> combined = new();
        foreach (var card in A_Stack.Cards) combined.Add(card);
        foreach (var card in B_Stack.Cards) combined.Add(card);


        Recipe recipe = CardEventSystem.instance.FindMatch(combined, out List<Card> matchedCards);
        if (recipe != null)
        {
            List<Card> inputCards = new();
            inputCards.AddRange(matchedCards.ToList());
            CardEventSystem.instance.ExecuteRecipe(recipe, inputCards, A_Stack.Top.CardView.transform.position, out List<Card> outputCards);
            return true;
        }

        Debug.Log("TryMerge，但并未合成成功");
        return false;
    }

    public void UpdateStackView(StackChangeEvent evt)
    {
        // 获取第一个CardView的坐标
        var cardView = evt.Stack.Cards[0].CardView;

        var position = cardView.transform.position;

        float offset = 0f;

        foreach (var card in evt.Stack.Cards)
        {
            card.CardView.transform.position = new Vector3(position.x, position.y + offset, position.z);
            offset += StackSystem.STACK_OFFSET;
        }
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