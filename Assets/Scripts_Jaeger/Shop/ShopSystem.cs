using System;
using System.Collections.Generic;
using System.Linq;
using Base;
using cfg;
using UnityEngine;



/// <summary>
/// 商店系统：购买卡包卡，双击打开后掉落卡
/// </summary>
public class ShopSystem: MonoBehaviour
{
    public Dictionary<string, CardData> packCardList = new();
    private ISpawnPositionStrategy _spawnStrategy;
    public Transform shopAreaParent;
    void Awake()
    {
        // 策略选择（后续可改为可注册工厂）
        _spawnStrategy = new RandomCircleSpawnStrategy(0.5f);
    }
    void Start()
    {
        RegisterPackCard();
    }

    private void RegisterPackCard(){
        DataManager.GetAllCardData()
            .Where(d => d.Type == cfg.CardType.卡包)
            .ToList()
            .ForEach(d => packCardList.Add(d.ID, d));
    }

    private void CreateShopArea(){
        GameObject shopAreaPrefab = Resources.Load<GameObject>("ShopArea");
        ShopArea shopArea = GameObject.Instantiate(shopAreaPrefab, Vector3.zero, Quaternion.identity).GetComponent<ShopArea>();
        shopArea.transform.position = Vector3.zero;
        shopArea.transform.SetParent(shopAreaParent);
    }

    // // 购买流程由 ShopArea 完成；此处保留开包逻辑与定义
    // private void OnPackDoubleClick(Card packCard)
    // {
    //     if (packCard == null) return;
    //     if (!packCardList.ContainsKey(packCard.Id)) return;

    //     // 只允许独立卡牌触发（防御性检查）
    //     if (packCard.ParentStack == null || packCard.ParentStack.Cards.Count != 1) return;

    //     var center = (Vector2)packCard.CardView.transform.position;
    //     var positions = _spawnStrategy.GetSpawnPositions(center, packCardList[packCard.Id].dropCount);

    //     // 生成掉落
    //     for (int i = 0; i < def.dropCount; i++)
    //     {
    //         var pickId = def.poolCardIds[UnityEngine.Random.Range(0, def.poolCardIds.Count)];
    //         CardSystem.instance.CreateCardById(pickId, positions[i]);
    //     }

    //     // 销毁包卡
    //     CardSystem.instance.DestroyCard(packCard);

    //     EventBus.Publish(new CardPackOpenedEvent(def.packId));
    // }
}