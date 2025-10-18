using UnityEngine;
using UnityEngine.UI;
using UnityEngine.Events;
using System.Collections.Generic;

/// <summary>
/// 成就面板控制器：负责面板显隐、成就条目生成、选中时展示详情与总体进度。
/// 设计为纯 UI 逻辑，不耦合存档系统；后续可通过外部注入数据对接真实进度。
/// </summary>
public class AchievementsPanel : MonoBehaviour
{
    [Header("面板设置")]
    [SerializeField] private GameObject achievementsPanel; // 成就主面板
    [SerializeField] private Button closeButton; // 关闭按钮

    [Header("总体进度")]
    [SerializeField] private Slider progressSlider; // 顶部进度条
    [SerializeField] private Text progressText; // 进度百分比文本

    [Header("列表与详情")]
    [SerializeField] private Transform itemsContainer; // 左侧网格/列表容器
    [SerializeField] private GameObject itemPrefab; // 成就条目预制体（含按钮与标题）
    [SerializeField] private Text detailTitleText; // 右侧详情标题
    [SerializeField] private Text detailDescText; // 右侧详情描述

    [Header("数据")] 
    [SerializeField] private List<AchievementData> achievements = new List<AchievementData>();

    private readonly List<GameObject> spawnedItems = new List<GameObject>();
    private int selectedIndex = -1;

    [System.Serializable]
    public class AchievementData
    {
        public string id;
        public string title;
        [TextArea(2, 4)] public string description;
        public bool unlocked;
    }

    private void Start()
    {
        if (achievementsPanel != null)
        {
            achievementsPanel.SetActive(false);
        }

        if (closeButton != null)
        {
            closeButton.onClick.AddListener(Hide);
        }
    }

    /// <summary>
    /// 打开面板，刷新内容。
    /// </summary>
    public void Show()
    {
        if (achievementsPanel == null) return;

        achievementsPanel.SetActive(true);
        RefreshItems();
        RefreshProgressBar();

        // 默认选中第一个条目（若存在）
        if (achievements.Count > 0)
        {
            
        }
    }

    /// <summary>
    /// 关闭面板。
    /// </summary>
    public void Hide()
    {
        if (achievementsPanel == null) return;
        achievementsPanel.SetActive(false);
        ClearItems();
        selectedIndex = -1;
    }

    /// <summary>
    /// 外部可调用以设置/替换成就数据，并刷新显示。
    /// </summary>
    public void SetAchievements(List<AchievementData> newData)
    {
        achievements = newData ?? new List<AchievementData>();
        if (achievementsPanel != null && achievementsPanel.activeSelf)
        {
            Show();
        }
    }

    private void RefreshItems()
    {
        ClearItems();
        if (itemsContainer == null || itemPrefab == null) return;

        for (int i = 0; i < achievements.Count; i++)
        {
            var data = achievements[i];
            GameObject go = GameObject.Instantiate(itemPrefab, itemsContainer);
            spawnedItems.Add(go);

            AchievementItemView view = go.GetComponent<AchievementItemView>();
            if (view == null) view = go.AddComponent<AchievementItemView>();

            string title = string.IsNullOrEmpty(data.title) ? ("成就 " + (i + 1)) : data.title;
            view.Initialize(title, data.unlocked, () => SelectIndex(i));
        }
    }

    private void ClearItems()
    {
        for (int i = 0; i < spawnedItems.Count; i++)
        {
            if (spawnedItems[i] != null)
            {
                GameObject.Destroy(spawnedItems[i]);
            }
        }
        spawnedItems.Clear();
    }

    private void SelectIndex(int index)
    {
        if (index < 0 || index >= achievements.Count) return;
        selectedIndex = index;

        // 高亮选择
        for (int i = 0; i < spawnedItems.Count; i++)
        {
            var view = spawnedItems[i].GetComponent<AchievementItemView>();
            if (view != null) view.SetSelected(i == selectedIndex);
        }

        // 刷新详情
        var data = achievements[selectedIndex];
        if (detailTitleText != null) detailTitleText.text = data.title;
        if (detailDescText != null) detailDescText.text = data.description;
    }

    private void RefreshProgressBar()
    {
        if (progressSlider == null && progressText == null) return;

        int total = achievements.Count;
        int unlocked = 0;
        for (int i = 0; i < achievements.Count; i++)
        {
            if (achievements[i].unlocked) unlocked++;
        }

        float percent = total > 0 ? (float)unlocked / total : 0f;
        if (progressSlider != null)
        {
            progressSlider.minValue = 0f;
            progressSlider.maxValue = 1f;
            progressSlider.value = percent;
        }
        if (progressText != null)
        {
            int pct = Mathf.RoundToInt(percent * 100f);
            progressText.text = "已获得 " + unlocked + " 项成就，共 " + total + " 项 (" + pct + "%)";
        }
    }
}


