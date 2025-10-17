using Base;
using cfg;
using System.Collections.Generic;
using UnityEngine;

public interface ICardActionSystem{
    public void ExecuteCardAction(CardAction cardAction, List<Card> cards);
}

/// <summary>
/// 卡牌效果系统，负责执行卡牌效果
/// </summary>
public class CardActionSystem : SingletonBase<CardActionSystem>, ICardActionSystem
{
    /// <summary>
    /// 执行卡牌效果
    /// </summary>
    /// <param name="cardAction">卡牌效果</param>
    /// <param name="cards">卡牌列表</param>
    public void ExecuteCardAction(CardAction cardAction, List<Card> cards)
    {       
        cardAction.Execute(cards);
    }
}
