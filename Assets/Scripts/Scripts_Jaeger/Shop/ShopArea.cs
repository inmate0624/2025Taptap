using System.Collections.Generic;
using System.Linq;
using cfg;
using TMPro;
using UnityEngine;

/// <summary>
/// 世界空间购买区域：放入等量“金币”卡，生成对应“卡包卡”
/// 由场景手动摆放，Inspector 配置 packId 与 price
/// </summary>
public class ShopArea : MonoBehaviour
{
    [Tooltip("要生成的卡包卡 ID（如 Pack_Basic）")]
    public string packId = "";
    [Tooltip("需要的金币卡数量")]
    public int price = 0;
    [Tooltip("卡包生成位置（为空默认用本节点位置）")]
    public Transform spawnPoint;

    [SerializeField]
    private TextMeshPro _priceText;
    [SerializeField]
    private TextMeshPro _packIdText;
    private CardData _cardData;
    void Start()
    {

    }

    void OnEnable()
    {

    }
    void OnDisable()
    {

    }

    /// <summary>
    /// 初始化卡包卡数据
    /// </summary>
    /// <param name="cardData"></param>
    public void Init(CardData cardData){
        if (cardData.Type != cfg.CardType.卡包) return;

        _cardData = cardData;  
        price = cardData.Price;
        packId = cardData.ID;

        _priceText.text = price.ToString();
        _packIdText.text = packId;
    }

    public void OnPointerUp()
    {
        if (CardSystem.instance.DraggingCardBoard.Cards.Count <= 0) return;
        if (CardSystem.instance.DraggingCardBoard.Cards.Count < price) return;
        if (!CardSystem.instance.DraggingCardBoard.Cards.All(c => c.DataType == cfg.CardType.金币)) return;
    
        // 消耗金币
        foreach (var c in CardSystem.instance.DraggingCardBoard.Cards)
        {
            CardSystem.instance.DestroyCard(c);
        }

        // 生成卡包卡
        GeneratePackCard();
    }

    private void GeneratePackCard(){
        var pos = spawnPoint != null ? (Vector2)spawnPoint.position : (Vector2)transform.position;
        CardSystem.instance.CreateCardById(packId, pos);
    }

}


