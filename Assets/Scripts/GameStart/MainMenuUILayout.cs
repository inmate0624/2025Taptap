using UnityEngine;
using UnityEngine.UI;
using UnityEngine.EventSystems;
using System.Collections;
using System.Collections.Generic;

/// <summary>
/// 游戏主界面布局控制器
/// 负责处理主界面的UI布局和动画效果
/// </summary>
public class MainMenuUILayout : MonoBehaviour
{
    [Header("UI元素")]
    [SerializeField] private CanvasGroup mainCanvasGroup; // 主画布组
    [SerializeField] private Transform buttonsContainer; // 按钮容器
    [SerializeField] private Button[] mainMenuButtons; // 主菜单按钮数组
    [SerializeField] private Text titleText; // 标题文本
    [SerializeField] private RectTransform titleBackground; // 标题背景区域

    [Header("动画设置")]
    [SerializeField] private float fadeDuration = 0.5f; // 淡入淡出持续时间
    [SerializeField] private float buttonSpacing = 10f; // 按钮间距
    [SerializeField] private float buttonScaleFactor = 1.1f; // 按钮悬停时的缩放因子
    [SerializeField] private float buttonMoveInDelay = 0.1f; // 按钮依次移入的延迟时间
    [SerializeField] private float titlePulseSpeed = 2f; // 标题脉冲速度
    [SerializeField] private float titlePulseAmount = 0.05f; // 标题脉冲幅度

    private Vector3[] originalButtonPositions; // 按钮原始位置
    private Vector3[] originalButtonScales; // 按钮原始缩放
    private Vector3 originalTitleScale; // 标题原始缩放

    // Start is called once before the first execution of Update after the MonoBehaviour is created
    void Start()
    {
        // 初始化
        InitializeButtonPositions();
        SetupButtonHighlightEffects();
        InitializeTitleScale();
        StartMainMenuAnimation();
    }

    /// <summary>
    /// 初始化按钮位置
    /// </summary>
    private void InitializeButtonPositions()
    {
        if (mainMenuButtons == null || mainMenuButtons.Length == 0)
            return;

        originalButtonPositions = new Vector3[mainMenuButtons.Length];
        originalButtonScales = new Vector3[mainMenuButtons.Length];

        for (int i = 0; i < mainMenuButtons.Length; i++)
        {
            if (mainMenuButtons[i] != null)
            {
                originalButtonPositions[i] = mainMenuButtons[i].transform.localPosition;
                originalButtonScales[i] = mainMenuButtons[i].transform.localScale;
            }
        }
    }

    /// <summary>
    /// 初始化标题缩放
    /// </summary>
    private void InitializeTitleScale()
    {
        if (titleText != null)
        {
            originalTitleScale = titleText.transform.localScale;
        }
    }

    /// <summary>
    /// 设置按钮高亮效果
    /// </summary>
    private void SetupButtonHighlightEffects()
    {
        if (mainMenuButtons == null)
            return;

        foreach (Button button in mainMenuButtons)
        {
            if (button != null)
            {
                // 添加按钮进入和退出的事件监听
                EventTrigger trigger = button.gameObject.GetComponent<EventTrigger>();
                if (trigger == null)
                    trigger = button.gameObject.AddComponent<EventTrigger>();

                // 清除现有的事件监听
                trigger.triggers.Clear();

                // 添加鼠标进入事件
                EventTrigger.Entry entryPointerEnter = new EventTrigger.Entry();
                entryPointerEnter.eventID = EventTriggerType.PointerEnter;
                entryPointerEnter.callback.AddListener((data) => { OnButtonEnter(button); });
                trigger.triggers.Add(entryPointerEnter);

                // 添加鼠标退出事件
                EventTrigger.Entry entryPointerExit = new EventTrigger.Entry();
                entryPointerExit.eventID = EventTriggerType.PointerExit;
                entryPointerExit.callback.AddListener((data) => { OnButtonExit(button); });
                trigger.triggers.Add(entryPointerExit);

                // 添加按钮点击效果
                EventTrigger.Entry entryPointerDown = new EventTrigger.Entry();
                entryPointerDown.eventID = EventTriggerType.PointerDown;
                entryPointerDown.callback.AddListener((data) => { OnButtonPress(button); });
                trigger.triggers.Add(entryPointerDown);

                // 添加按钮释放效果
                EventTrigger.Entry entryPointerUp = new EventTrigger.Entry();
                entryPointerUp.eventID = EventTriggerType.PointerUp;
                entryPointerUp.callback.AddListener((data) => { OnButtonRelease(button); });
                trigger.triggers.Add(entryPointerUp);
            }
        }
    }

    /// <summary>
    /// 开始主菜单动画
    /// </summary>
    private void StartMainMenuAnimation()
    {
        // 初始设置
        if (mainCanvasGroup != null)
            mainCanvasGroup.alpha = 0f;

        if (titleText != null)
            titleText.gameObject.SetActive(false);

        if (titleBackground != null)
            titleBackground.gameObject.SetActive(false);

        if (buttonsContainer != null)
        {
            // 将按钮移出屏幕
            for (int i = 0; i < mainMenuButtons.Length; i++)
            {
                if (mainMenuButtons[i] != null)
                {
                    // 从右侧移出
                    mainMenuButtons[i].transform.localPosition = new Vector3(
                        Screen.width,
                        originalButtonPositions[i].y,
                        originalButtonPositions[i].z
                    );
                }
            }
        }

        // 启动淡入动画
        StartCoroutine(MainMenuAnimationSequence());
    }

    /// <summary>
    /// 主菜单动画序列
    /// </summary>
    private IEnumerator MainMenuAnimationSequence()
    {
        // 画布淡入
        yield return StartCoroutine(FadeCanvas(mainCanvasGroup, 0f, 1f, fadeDuration));

        // 显示标题和背景并添加动画效果
        if (titleBackground != null)
            titleBackground.gameObject.SetActive(true);

        if (titleText != null)
        {
            titleText.gameObject.SetActive(true);
            StartCoroutine(PulseTitle());
        }

        // 按钮依次移入
        if (buttonsContainer != null)
        {
            for (int i = 0; i < mainMenuButtons.Length; i++)
            {
                if (mainMenuButtons[i] != null)
                {
                    yield return StartCoroutine(MoveButtonIntoView(
                        mainMenuButtons[i],
                        originalButtonPositions[i],
                        fadeDuration
                    ));
                    yield return new WaitForSeconds(buttonMoveInDelay);
                }
            }
        }
    }

    #region 按钮事件处理

    /// <summary>
    /// 按钮进入事件处理
    /// </summary>
    private void OnButtonEnter(Button button)
    {
        if (button == null)
            return;

        // 添加悬停动画效果
        button.transform.localScale = originalButtonScales[GetButtonIndex(button)] * buttonScaleFactor;
        // 播放悬停音效（如果有）
        PlayButtonSound(ButtonSoundType.Hover);
    }

    /// <summary>
    /// 按钮退出事件处理
    /// </summary>
    private void OnButtonExit(Button button)
    {
        if (button == null)
            return;

        // 恢复原始缩放
        button.transform.localScale = originalButtonScales[GetButtonIndex(button)];
    }

    /// <summary>
    /// 按钮按下事件处理
    /// </summary>
    private void OnButtonPress(Button button)
    {
        if (button == null || !button.interactable)
            return;

        // 添加按下效果
        button.transform.localScale = originalButtonScales[GetButtonIndex(button)] * 0.95f;
    }

    /// <summary>
    /// 按钮释放事件处理
    /// </summary>
    private void OnButtonRelease(Button button)
    {
        if (button == null || !button.interactable)
            return;

        // 恢复原始缩放
        button.transform.localScale = originalButtonScales[GetButtonIndex(button)] * buttonScaleFactor;
        // 播放点击音效（如果有）
        PlayButtonSound(ButtonSoundType.Click);
    }

    /// <summary>
    /// 获取按钮在数组中的索引
    /// </summary>
    private int GetButtonIndex(Button button)
    {
        for (int i = 0; i < mainMenuButtons.Length; i++)
        {
            if (mainMenuButtons[i] == button)
                return i;
        }
        return 0;
    }

    /// <summary>
    /// 按钮音效类型枚举
    /// </summary>
    private enum ButtonSoundType
    {
        Hover,
        Click
    }

    /// <summary>
    /// 播放按钮音效
    /// </summary>
    private void PlayButtonSound(ButtonSoundType type)
    {
        // 这里可以添加播放音效的逻辑
        // 可以通过AudioManager来播放音效
        Debug.Log($"播放按钮{type}音效");
    }

    #endregion

    #region 动画协程

    /// <summary>
    /// 画布淡入淡出动画
    /// </summary>
    private IEnumerator FadeCanvas(CanvasGroup canvasGroup, float startAlpha, float endAlpha, float duration)
    {
        if (canvasGroup == null)
            yield break;

        float elapsedTime = 0f;
        canvasGroup.alpha = startAlpha;

        while (elapsedTime < duration)
        {
            elapsedTime += Time.deltaTime;
            canvasGroup.alpha = Mathf.Lerp(startAlpha, endAlpha, elapsedTime / duration);
            yield return null;
        }

        canvasGroup.alpha = endAlpha;
    }

    /// <summary>
    /// 按钮移入视图动画
    /// </summary>
    private IEnumerator MoveButtonIntoView(Button button, Vector3 targetPosition, float duration)
    {
        if (button == null)
            yield break;

        float elapsedTime = 0f;
        Vector3 startPosition = button.transform.localPosition;

        // 使用动画曲线使动画更自然
        AnimationCurve curve = AnimationCurve.EaseInOut(0f, 0f, 1f, 1f);

        while (elapsedTime < duration)
        {
            elapsedTime += Time.deltaTime;
            float progress = curve.Evaluate(elapsedTime / duration);
            button.transform.localPosition = Vector3.Lerp(startPosition, targetPosition, progress);
            yield return null;
        }

        button.transform.localPosition = targetPosition;
    }

    /// <summary>
    /// 标题脉冲动画
    /// </summary>
    private IEnumerator PulseTitle()
    {
        if (titleText == null)
            yield break;

        while (true)
        {
            // 放大
            yield return StartCoroutine(ScaleText(
                titleText, 
                originalTitleScale, 
                originalTitleScale * (1f + titlePulseAmount), 
                titlePulseSpeed
            ));
            // 缩小
            yield return StartCoroutine(ScaleText(
                titleText, 
                originalTitleScale * (1f + titlePulseAmount), 
                originalTitleScale, 
                titlePulseSpeed
            ));
        }
    }

    /// <summary>
    /// 文本缩放动画
    /// </summary>
    private IEnumerator ScaleText(Text text, Vector3 startScale, Vector3 endScale, float duration)
    {
        if (text == null)
            yield break;

        float elapsedTime = 0f;
        text.transform.localScale = startScale;

        // 使用平滑的动画曲线 - 使用关键帧创建平滑曲线
        AnimationCurve curve = new AnimationCurve(
            new Keyframe(0f, 0f, 0f, 1f),
            new Keyframe(1f, 1f, 1f, 0f)
        );

        while (elapsedTime < duration)
        {
            elapsedTime += Time.deltaTime;
            float progress = curve.Evaluate(elapsedTime / duration);
            text.transform.localScale = Vector3.Lerp(startScale, endScale, progress);
            yield return null;
        }

        text.transform.localScale = endScale;
    }

    #endregion

    /// <summary>
    /// 重新设置布局，用于窗口大小改变时
    /// </summary>
    public void ResetLayout()
    {
        InitializeButtonPositions();
        InitializeTitleScale();
    }
}
