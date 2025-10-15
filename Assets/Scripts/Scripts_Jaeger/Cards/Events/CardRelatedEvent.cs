
/// <summary>
/// 卡牌数量变化事件
/// </summary>
public class CardAmountChangeEvent{
    public int MaxCardCount {get; private set;}
    public int CurrentCardCount {get; private set;}
    public CardAmountChangeEvent(int maxCardCount, int currentCardCount){
        MaxCardCount = maxCardCount;
        CurrentCardCount = currentCardCount;
    }
}


public class AddCardEvent{
    public Card Card {get; private set;}
    public AddCardEvent(Card card){
        Card = card;
    }
}

public class RemoveCardEvent{
    public Card Card {get; private set;}
    public RemoveCardEvent(Card card){
        Card = card;
    }
}

