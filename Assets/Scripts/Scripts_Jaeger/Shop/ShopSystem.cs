using System;
using System.Collections.Generic;
using System.Linq;
using Base;
using cfg;
using UnityEngine;



/// <summary>
/// 商店系统：管理购买区域的生成
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
        CreateShopArea(packCardList.Values.ToList());
    }
    void Update()
    {
        // 松开鼠标
        DetectShopArea();
    }
    private void DetectShopArea(){
        // 当鼠标放手时检测商店区域
        if (Input.GetMouseButtonUp(0)){
            // 检测鼠标是否命中商店区域
            List<RaycastHit2D> hits = Physics2D.RaycastAll(UtilityJaeger.GetMousePosition(), Vector2.zero).ToList();
            hits.RemoveAll(h => h.collider.gameObject.layer != LayerMask.NameToLayer("ShopArea"));
            if (hits.Count > 0){
                Debug.Log("命中商店区域");
                ShopArea shopArea = hits[0].collider.GetComponent<ShopArea>();
                if (shopArea != null){
                    shopArea.OnPointerUp();
                }
            }
        }
    }
    private void RegisterPackCard(){
        DataManager.GetAllCardData()
            .Where(d => d.Type == cfg.CardType.卡包)
            .ToList()
            .ForEach(d => packCardList.Add(d.ID, d));
    }

    /// <summary>
    /// 创建一个商店区域
    /// </summary>
    private void CreateShopArea(List<CardData> cardDataList){
        cardDataList.Sort((a, b) => a.Price.CompareTo(b.Price));

        List<ShopArea> shopAreaList = new();

        foreach (var cardData in cardDataList)
        {
            // 加载商店区域预制体
            GameObject shopAreaPrefab = Resources.Load<GameObject>("购买区域");
            ShopArea shopArea = GameObject.Instantiate(shopAreaPrefab, Vector3.zero, Quaternion.identity).GetComponent<ShopArea>();
            shopArea.transform.position = Vector3.zero;
            shopArea.Init(cardData);
            // 放置在父节点下排列
            shopArea.transform.SetParent(shopAreaParent);
            shopAreaList.Add(shopArea);
        }
    }


}