using UnityEngine;
using UnityEngine.UI;
using UnityEngine.EventSystems;
using System.Collections.Generic;
using System.Collections;
using UnityEngine.EventSystems;
using UnityEngine.Events;

/// <summary>
/// 制作人员面板控制器
/// 负责管理制作人员卡片的展示、堆叠和彩蛋效果
/// </summary>
public class CreditsPanel : MonoBehaviour
{
    [Header("面板设置")]
    [SerializeField] private GameObject creditsPanel; // 制作人员面板对象
    [SerializeField] private Button closeButton; // 关闭按钮
    [SerializeField] private GameObject groupPhotoPanel; // 合照面板对象
    [SerializeField] private Button groupPhotoCloseButton; // 合照关闭按钮

    [Header("卡片设置")]
    [SerializeField] private GameObject cardPrefab; // 人员卡片预制体
    [SerializeField] private Transform cardsContainer; // 卡片容器
    [SerializeField] private float cardMinX = -200f; // 卡片分布的最小X坐标
    [SerializeField] private float cardMaxX = 200f; // 卡片分布的最大X坐标
    [SerializeField] private float cardMinY = -150f; // 卡片分布的最小Y坐标
    [SerializeField] private float cardMaxY = 150f; // 卡片分布的最大Y坐标
    [SerializeField] private float cardRotateRange = 15f; // 卡片旋转范围
    [SerializeField] private float dragSpeed = 1.0f; // 拖拽速度
    [SerializeField] private float mergeThreshold = 50f; // 卡片合并的距离阈值

    [Header("彩蛋设置")]
    [SerializeField] private int maxCardsForEasterEgg = 5; // 触发彩蛋所需的最大卡片数 (5张堆叠显示合照)
    private int stackedCardsCount = 0; // 当前堆叠的卡片数量

    [Header("制作人员数据")]
    [SerializeField] private List<CreditsPersonData> creditsData = new List<CreditsPersonData>(); // 制作人员数据

    private List<GameObject> activeCards = new List<GameObject>(); // 活跃的卡片列表
    private bool isEasterEggActive = false; // 彩蛋是否激活
    private bool isDragging = false; // 是否正在拖拽
    private GameObject draggedCard = null; // 当前拖拽的卡片
    private Vector3 dragOffset; // 拖拽偏移量
    private int mergedCardCount = 0; // 已合并的卡片数量

    // 制作人员数据结构
    [System.Serializable]
    public class CreditsPersonData
    {
        public string name; // 姓名
        public string role; // 角色
    }

    // Start is called once before the first execution of Update after the MonoBehaviour is created
    void Start()
    {
        // 初始化面板状态
        if (creditsPanel != null)
        {
            creditsPanel.SetActive(false);
        }

        if (groupPhotoPanel != null)
        {
            groupPhotoPanel.SetActive(false);
        }

        // 添加UI事件监听
        SetupUIEventListeners();
    }

    /// <summary>
    /// 设置UI事件监听器
    /// </summary>
    private void SetupUIEventListeners()
    {
        if (closeButton != null)
            closeButton.onClick.AddListener(HideCreditsPanel);

        if (groupPhotoCloseButton != null)
            groupPhotoCloseButton.onClick.AddListener(HideGroupPhoto);
    }

    /// <summary>
    /// 显示制作人员面板
    /// </summary>
    public void ShowCreditsPanel()
    {
        if (creditsPanel != null)
        {
            creditsPanel.SetActive(true);
            // 暂停游戏时间
            Time.timeScale = 0f;
            
            // 重置状态
            isEasterEggActive = false;
            stackedCardsCount = 0;
            
            // 生成并展示卡片
            GenerateAndSpreadCards();
        }
    }

    /// <summary>
    /// 隐藏制作人员面板
    /// </summary>
    public void HideCreditsPanel()
    {
        if (creditsPanel != null)
        {
            creditsPanel.SetActive(false);
            // 销毁所有卡片
            DestroyAllCards();
            // 恢复游戏时间
            Time.timeScale = 1f;
        }
    }

    /// <summary>
    /// 显示合照（彩蛋效果）
    /// </summary>
    private void ShowGroupPhoto()
    {
        if (groupPhotoPanel != null && !isEasterEggActive)
        {
            // 显示合照面板
            groupPhotoPanel.SetActive(true);
            isEasterEggActive = true;
        }
    }

    /// <summary>
    /// 隐藏合照
    /// </summary>
    private void HideGroupPhoto()
    {
        if (groupPhotoPanel != null)
        {
            groupPhotoPanel.SetActive(false);
            isEasterEggActive = false;
        }
    }

    /// <summary>
    /// 生成并均匀分布卡片
    /// </summary>
    private void GenerateAndSpreadCards()
    {
        // 先销毁所有现有卡片
        DestroyAllCards();

        // 计算总卡片数，确保不超过触发彩蛋的最大数量
        int cardCount = Mathf.Min(creditsData.Count, maxCardsForEasterEgg);

        // 生成卡片并设置随机分布位置
        for (int i = 0; i < cardCount; i++)
        {
            if (i < creditsData.Count && cardPrefab != null && cardsContainer != null)
            {
                // 生成随机位置
                float randomX = Random.Range(cardMinX, cardMaxX);
                float randomY = Random.Range(cardMinY, cardMaxY);
                Vector3 randomPos = new Vector3(randomX, randomY, 0);
                
                // 随机旋转角度
                float randomRotation = Random.Range(-cardRotateRange, cardRotateRange);
                Quaternion startRotation = Quaternion.Euler(0f, 0f, randomRotation);
                
                // 实例化卡片到随机位置
                GameObject card = Instantiate(cardPrefab, randomPos, startRotation, cardsContainer);
                activeCards.Add(card);

                // 设置卡片数据
                SetupCardData(card, creditsData[i], i);
                
                // 添加拖拽功能
                AddDraggableComponent(card);
            }
        }
    }
    
    /// <summary>
    /// 为卡片添加拖拽组件
    /// </summary>
    private void AddDraggableComponent(GameObject card)
    {
        // 添加Event Trigger组件
        EventTrigger trigger = card.GetComponent<EventTrigger>();
        if (trigger == null)
        {
            trigger = card.AddComponent<EventTrigger>();
        }
        
        // 清空所有事件
        trigger.triggers.Clear();
        
        // 添加开始拖拽事件
        EventTrigger.Entry beginDragEntry = new EventTrigger.Entry();
        beginDragEntry.eventID = EventTriggerType.BeginDrag;
        beginDragEntry.callback.AddListener((data) => { OnBeginDrag((PointerEventData)data, card); });
        trigger.triggers.Add(beginDragEntry);
        
        // 添加拖拽事件
        EventTrigger.Entry dragEntry = new EventTrigger.Entry();
        dragEntry.eventID = EventTriggerType.Drag;
        dragEntry.callback.AddListener((data) => { OnDrag((PointerEventData)data, card); });
        trigger.triggers.Add(dragEntry);
        
        // 添加结束拖拽事件
        EventTrigger.Entry endDragEntry = new EventTrigger.Entry();
        endDragEntry.eventID = EventTriggerType.EndDrag;
        endDragEntry.callback.AddListener((data) => { OnEndDrag((PointerEventData)data, card); });
        trigger.triggers.Add(endDragEntry);
        
        // 确保卡片有RectTransform组件
        if (card.GetComponent<RectTransform>() == null)
        {
            card.AddComponent<RectTransform>();
        }
    }
    
    /// <summary>
    /// 开始拖拽处理
    /// </summary>
    private void OnBeginDrag(PointerEventData eventData, GameObject card)
    {
        isDragging = true;
        draggedCard = card;
        
        // 计算拖拽偏移量
        RectTransform cardRect = card.GetComponent<RectTransform>();
        RectTransformUtility.ScreenPointToWorldPointInRectangle(
            cardRect, eventData.position, eventData.pressEventCamera, out Vector3 worldPoint);
        dragOffset = cardRect.position - worldPoint;
        
        // 将拖拽的卡片移到最上层
        card.transform.SetAsLastSibling();
    }
    
    /// <summary>
    /// 拖拽处理
    /// </summary>
    private void OnDrag(PointerEventData eventData, GameObject card)
    {
        if (isDragging && draggedCard == card)
        {
            RectTransform cardRect = card.GetComponent<RectTransform>();
            if (RectTransformUtility.ScreenPointToWorldPointInRectangle(
                cardRect, eventData.position, eventData.pressEventCamera, out Vector3 worldPoint))
            {
                cardRect.position = worldPoint + dragOffset;
            }
        }
    }
    
    /// <summary>
    /// 结束拖拽处理
    /// </summary>
    private void OnEndDrag(PointerEventData eventData, GameObject card)
    {
        isDragging = false;
        
        // 检查是否与其他卡片合并
        CheckCardMerging(card);
        
        draggedCard = null;
    }
    
    /// <summary>
    /// 检查卡片合并
    /// </summary>
    private void CheckCardMerging(GameObject draggedCard)
    {
        mergedCardCount = 0;
        
        // 检查所有活跃卡片是否靠近
        foreach (GameObject card in activeCards)
        {
            if (card != draggedCard && card != null)
            {
                float distance = Vector3.Distance(draggedCard.transform.position, card.transform.position);
                if (distance < mergeThreshold)
                {
                    mergedCardCount++;
                }
            }
        }
        
        // 如果卡片数量达到阈值，触发彩蛋
        if (!isEasterEggActive && mergedCardCount >= maxCardsForEasterEgg - 1) // 减1是因为不包括自身
        {
            ShowGroupPhoto();
        }
    }

    /// <summary>
    /// 设置卡片数据
    /// </summary>
    private void SetupCardData(GameObject card, CreditsPersonData data, int index)
    {
        // 设置卡片名称便于识别
        card.name = $"CreditsCard_{index}_{data.name}";

        // 查找并设置卡片上的文本组件
        Text[] texts = card.GetComponentsInChildren<Text>();
        foreach (Text text in texts)
        {
            if (text.name == "NameText")
            {
                text.text = data.name;
            }
            else if (text.name == "RoleText")
            {
                text.text = data.role;
            }
        }

        // 添加卡片点击事件
        Button cardButton = card.GetComponent<Button>();
        if (cardButton != null)
        {
            cardButton.onClick.RemoveAllListeners();
            cardButton.onClick.AddListener(() => OnCardClicked(card));
        }
    }

    /// <summary>
    /// 添加上下文菜单按钮
    /// </summary>
    private void AddContextMenuButton(GameObject card)
    {
        // 这里可以添加更多交互方式，如右键菜单等
        // 为简化实现，目前主要通过点击来触发彩蛋
    }

    /// <summary>
    /// 卡片点击处理
    /// </summary>
    private void OnCardClicked(GameObject clickedCard)
    {
        // 简单的卡片点击逻辑
        Debug.Log($"点击了卡片: {clickedCard.name}");
    }

    /// <summary>
    /// 移动卡片到指定位置的动画协程
    /// </summary>
    private IEnumerator MoveCardToPosition(GameObject card, Vector3 targetPos, float targetRotation, float delay)
    {
        // 等待延迟时间
        yield return new WaitForSeconds(delay);

        Vector3 startPos = card.transform.position;
        float startRotation = card.transform.eulerAngles.z;
        float elapsedTime = 0f;
        float animationDuration = 0.3f; // 动画持续时间

        while (elapsedTime < animationDuration)
        {
            elapsedTime += Time.unscaledDeltaTime; // 使用unscaledDeltaTime以确保在时间暂停时也能运行
            float progress = elapsedTime / animationDuration;
            
            // 使用平滑的动画曲线
            AnimationCurve curve = new AnimationCurve(
                new Keyframe(0f, 0f, 0f, 1f),
                new Keyframe(1f, 1f, 1f, 0f)
            );
            float smoothedProgress = curve.Evaluate(progress);

            // 更新位置和旋转
            card.transform.position = Vector3.Lerp(startPos, targetPos, smoothedProgress);
            card.transform.rotation = Quaternion.Euler(0f, 0f, Mathf.Lerp(startRotation, targetRotation, smoothedProgress));

            yield return null;
        }

        // 确保最终位置准确
        card.transform.position = targetPos;
        card.transform.rotation = Quaternion.Euler(0f, 0f, targetRotation);
    }

    /// <summary>
    /// 销毁所有卡片
    /// </summary>
    private void DestroyAllCards()
    {
        foreach (GameObject card in activeCards)
        {
            if (card != null)
            {
                Destroy(card);
            }
        }
        activeCards.Clear();
        stackedCardsCount = 0;
        mergedCardCount = 0;
        isDragging = false;
        draggedCard = null;
    }

    /// <summary>
    /// 合并卡片的方法（用于堆叠效果）
    /// </summary>
    public void MergeCards(GameObject targetCard, GameObject inputCard)
    {
        // 实现卡片合并逻辑
        // 这里可以添加堆叠效果的视觉反馈
        Debug.Log($"合并卡片: {inputCard.name} 到 {targetCard.name}");
    }
}