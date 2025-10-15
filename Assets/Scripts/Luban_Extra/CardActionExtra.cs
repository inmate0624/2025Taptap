using System.Collections.Generic;
using System.Linq;
using cfg;
namespace cfg{
public abstract partial class CardAction{
    // 把触发者传入（考虑到配方不止一个触发者，所以传入的是列表）
    public abstract void Execute(List<Card> cards);
}

/// <summary>
/// 生成卡牌
/// </summary>
public partial class CA_生成卡牌{
    public override void Execute(List<Card> cards){
        
        if (this.IsRandom){
            // 随机选择Amount个卡牌
            List<string> cardIds = new();
            cardIds = TargetIds.OrderBy(x => UnityEngine.Random.value).Take(this.Amount).ToList();

            foreach (var cardId in cardIds){
                CardSystem.instance.CreateCardById(cardId.ToString(), cards[0].CardView.transform.position);
            }
        }
        else{
            // 若不随机，则按照TargetIds生成卡牌（即Amount只在随机时有意义）
            foreach (var cardId in this.TargetIds){
                CardSystem.instance.CreateCardById(cardId.ToString(), cards[0].CardView.transform.position);
            }
        }
        return;
    }
}


/// <summary>
/// 销毁自身
/// </summary>
public partial class CA_销毁自身{
    public override void Execute(List<Card> cards){
        foreach (var card in cards){
            CardSystem.instance.DestroyCard(card);
        }
        return;
    }
}

}