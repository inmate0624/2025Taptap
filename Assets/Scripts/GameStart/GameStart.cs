using UnityEngine;
using UnityEngine.SceneManagement;

/// <summary>
/// 游戏开始控制脚本
/// 用于处理游戏启动和场景切换
/// </summary>
public class GameStart : MonoBehaviour
{
    [Header("场景设置")]
    [SerializeField] private int targetSceneIndex = 1; // 目标场景索引
    [SerializeField] private bool useIndexInsteadOfName = true; // 是否使用索引而不是名称
    [SerializeField] private string targetSceneName = "";

    private bool isLoading = false; // 防止重复加载的标志

    /// <summary>
    /// 开始游戏的公共方法，可从UI按钮调用
    /// </summary>
    public void StartGame()
    {
        // 防止重复加载
        if (isLoading)
            return;

        isLoading = true;

        try
        {
            // 根据设置选择加载方式
            if (useIndexInsteadOfName)
            {
                LoadSceneByIndex(targetSceneIndex);
            }
            else if (!string.IsNullOrEmpty(targetSceneName))
            {
                LoadSceneByName(targetSceneName);
            }
            else
            {
                Debug.LogWarning("未设置场景名称，默认使用索引加载");
                LoadSceneByIndex(targetSceneIndex);
            }
        }
        catch (System.Exception ex)
        {
            Debug.LogError($"加载场景时出错: {ex.Message}");
            isLoading = false; // 重置加载标志
        }
    }

    /// <summary>
    /// 通过索引加载场景
    /// </summary>
    private void LoadSceneByIndex(int index)
    {
        // 检查索引是否有效
        if (index >= 0 && index < SceneManager.sceneCountInBuildSettings)
        {
            Debug.Log($"正在加载场景索引: {index}");
            SceneManager.LoadScene(index);
        }
        else
        {
            Debug.LogError($"无效的场景索引: {index}");
            isLoading = false; // 重置加载标志
        }
    }

    /// <summary>
    /// 通过名称加载场景
    /// </summary>
    private void LoadSceneByName(string sceneName)
    {
        Debug.Log($"正在加载场景: {sceneName}");
        SceneManager.LoadScene(sceneName);
    }

    /// <summary>
    /// 在游戏对象被禁用时重置加载标志
    /// </summary>
    private void OnDisable()
    {
        isLoading = false;
    }
}
