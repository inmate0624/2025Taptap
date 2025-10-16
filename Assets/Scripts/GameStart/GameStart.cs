using UnityEngine;
using UnityEngine.SceneManagement;

/// <summary>
/// 游戏开始控制器
/// 提供简单的场景加载功能
/// </summary>
public class GameStart : MonoBehaviour
{
    [Header("场景设置")]
    [SerializeField] private int targetSceneIndex = 1; // 目标场景索引

    /// <summary>
    /// 开始游戏的公共方法，可从UI按钮调用
    /// </summary>
    public void StartGame()
    {
        try
        {
            // 检查场景索引是否有效
            if (targetSceneIndex >= 0 && targetSceneIndex < SceneManager.sceneCountInBuildSettings)
            {
                Debug.Log($"正在加载场景索引: {targetSceneIndex}");
                SceneManager.LoadScene(targetSceneIndex);
            }
            else
            {
                Debug.LogError($"无效的场景索引: {targetSceneIndex}");
            }
        }
        catch (System.Exception ex)
        {
            Debug.LogError($"加载场景时出错: {ex.Message}");
        }
    }
}
