using UnityEngine;
using UnityEngine.SceneManagement;
using UnityEngine.UI;

/// <summary>
/// 游戏主菜单控制器
/// 负责处理游戏主界面的交互逻辑
/// </summary>
public class MainMenuController : MonoBehaviour
{
    [Header("UI元素")]
    [SerializeField] private Button newGameButton;         // 新游戏按钮
    [SerializeField] private Button continueGameButton;    // 继续游戏按钮
    [SerializeField] private Button achievementsButton;    // 成就按钮
    [SerializeField] private Button creditsButton;         // 制作人员按钮
    [SerializeField] private Button settingsButton;        // 设置按钮
    [SerializeField] private Button exitButton;            // 退出游戏按钮
    [SerializeField] private Setting settingManager;       // 设置管理器引用
    [SerializeField] private CreditsPanel creditsPanel;    // 制作人员面板控制器

    [Header("游戏设置")]
    [SerializeField] private int gameSceneIndex = 1;       // 游戏场景索引

    // Start is called once before the first execution of Update after the MonoBehaviour is created
    void Start()
    {
        // 添加按钮点击事件监听
        if (newGameButton != null)
            newGameButton.onClick.AddListener(OnNewGameButtonClick);

        if (continueGameButton != null)
            continueGameButton.onClick.AddListener(OnContinueGameButtonClick);

        if (achievementsButton != null)
            achievementsButton.onClick.AddListener(OnAchievementsButtonClick);

        if (creditsButton != null)
            creditsButton.onClick.AddListener(OnCreditsButtonClick);

        if (settingsButton != null)
            settingsButton.onClick.AddListener(OnSettingsButtonClick);

        if (exitButton != null)
            exitButton.onClick.AddListener(OnExitButtonClick);

        // 检查是否有存档，决定是否启用继续游戏按钮
        CheckAndSetContinueButtonState();
    }

    /// <summary>
    /// 检查并设置继续游戏按钮的状态
    /// </summary>
    private void CheckAndSetContinueButtonState()
    {
        // 这里可以添加检查存档是否存在的逻辑
        // 暂时默认启用继续游戏按钮
        if (continueGameButton != null)
        {
            bool hasSaveFile = CheckForSaveFile();
            continueGameButton.interactable = hasSaveFile;
            // 如果没有存档，可以设置按钮为半透明或禁用状态
            if (!hasSaveFile)
            {
                Color buttonColor = continueGameButton.image.color;
                buttonColor.a = 0.6f;
                continueGameButton.image.color = buttonColor;
            }
        }
    }

    /// <summary>
    /// 检查是否有保存的游戏文件
    /// </summary>
    /// <returns>是否存在存档</returns>
    private bool CheckForSaveFile()
    {
        // 这里可以实现实际的存档检查逻辑
        // 暂时默认返回true，允许继续游戏
        return true;
    }

    #region 按钮点击事件处理方法

    /// <summary>
    /// 新游戏按钮点击处理
    /// </summary>
    public void OnNewGameButtonClick()
    {
        Debug.Log("新游戏按钮被点击，开始新游戏...");
        // 显示确认对话框，询问是否覆盖存档
        // 暂时直接开始新游戏
        StartNewGame();
    }

    /// <summary>
    /// 继续游戏按钮点击处理
    /// </summary>
    public void OnContinueGameButtonClick()
    {
        Debug.Log("继续游戏按钮被点击，加载存档...");
        // 加载游戏存档
        ContinueGame();
    }

    /// <summary>
    /// 成就按钮点击处理
    /// </summary>
    public void OnAchievementsButtonClick()
    {
        Debug.Log("成就按钮被点击，显示成就面板...");
        // 显示成就面板
        ShowAchievementsPanel();
    }

    /// <summary>
    /// 制作人员按钮点击处理
    /// </summary>
    public void OnCreditsButtonClick()
    {
        Debug.Log("制作人员按钮被点击，显示制作人员信息...");
        // 显示制作人员面板
        ShowCreditsPanel();
    }

    /// <summary>
    /// 设置按钮点击处理
    /// </summary>
    public void OnSettingsButtonClick()
    {
        Debug.Log("设置按钮被点击，显示设置面板...");
        if (settingManager != null)
        {
            settingManager.ShowSettingPanel();
        }
    }

    /// <summary>
    /// 退出游戏按钮点击处理
    /// </summary>
    public void OnExitButtonClick()
    {
        Debug.Log("退出游戏按钮被点击...");
        // 显示退出确认对话框
        ExitGame();
    }

    #endregion

    #region 功能实现方法

    /// <summary>
    /// 开始新游戏
    /// </summary>
    private void StartNewGame()
    {
        // 可以在这里重置游戏数据或清除存档
        LoadGameScene();
    }

    /// <summary>
    /// 继续游戏
    /// </summary>
    private void ContinueGame()
    {
        // 这里可以实现加载存档的逻辑
        LoadGameScene();
    }

    /// <summary>
    /// 加载游戏场景
    /// </summary>
    private void LoadGameScene()
    {
        try
        {
            // 检查场景索引是否有效
            if (gameSceneIndex >= 0 && gameSceneIndex < SceneManager.sceneCountInBuildSettings)
            {
                Debug.Log($"正在加载游戏场景，索引: {gameSceneIndex}");
                SceneManager.LoadScene(gameSceneIndex);
            }
            else
            {
                Debug.LogError($"无效的场景索引: {gameSceneIndex}");
                // 显示错误提示给用户
            }
        }
        catch (System.Exception ex)
        {
            Debug.LogError($"加载场景时出错: {ex.Message}");
            // 显示错误提示给用户
        }
    }

    /// <summary>
    /// 显示成就面板
    /// </summary>
    private void ShowAchievementsPanel()
    {
        // 这里可以实现显示成就面板的逻辑
        Debug.Log("显示成就面板");
        // 未来可以实现成就系统
    }

    /// <summary>
    /// 显示制作人员面板
    /// </summary>
    private void ShowCreditsPanel()
    {
        Debug.Log("显示制作人员面板");
        if (creditsPanel != null)
        {
            creditsPanel.ShowCreditsPanel();
        }
    }

    /// <summary>
    /// 退出游戏
    /// </summary>
    private void ExitGame()
    {
        // 在编辑器中不退出，只打印日志
#if UNITY_EDITOR
        Debug.Log("在编辑器中退出游戏");
        UnityEditor.EditorApplication.isPlaying = false;
#else
        // 在实际游戏中退出应用程序
        Debug.Log("退出游戏");
        Application.Quit();
#endif
    }

    #endregion
}