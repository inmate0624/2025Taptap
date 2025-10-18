using UnityEngine;
using UnityEngine.SceneManagement;

/// <summary>
/// 游戏开始控制器
/// 处理开始游戏按钮的点击事件并加载游戏场景
/// </summary>
public class GameStart : MonoBehaviour
{
    public void OnStartGameButtonClick()
    {
        Debug.Log("开始游戏按钮被点击，正在加载游戏场景...");
        SceneManager.LoadScene(1);
    }
}

