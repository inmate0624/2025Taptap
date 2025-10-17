using UnityEngine;
using System.Collections.Generic;
using UnityEngine.Rendering;
#if TMP_PRESENT
using TMPro;
#endif

[DisallowMultipleComponent]
public class UIForegroundRenderer : MonoBehaviour
{
    [Header("前置 Canvas")]
    public Canvas targetCanvas; // 目标 Canvas
    public string targetCanvasName = "UI";
    [Header("排序设置")]
    public string sortingLayerName = "UI"; // UI 前置层
    public int baseOrderInLayer = 5000;    // 高于 UI 元素

    private List<Renderer> renderers = new List<Renderer>();

    void Awake()
    {
        if (targetCanvas == null)
        {
            targetCanvas = GameObject.Find(targetCanvasName).GetComponent<Canvas>();

            Debug.LogError("UIForegroundRenderer: 需要指定 Canvas");
            enabled = false;
            return;
        }

        // 收集所有 Renderer，包括子物体
        renderers.Clear();
        renderers.AddRange(GetComponentsInChildren<Renderer>(true));
#if TMP_PRESENT
        foreach (var tmp in GetComponentsInChildren<TextMeshPro>(true))
        {
            var tmpRenderer = tmp.GetComponent<Renderer>();
            if (tmpRenderer != null && !renderers.Contains(tmpRenderer))
                renderers.Add(tmpRenderer);
        }
#endif

        ApplySorting();
    }

    private void ApplySorting()
    {
        foreach (var rend in renderers)
        {
            if (rend is SpriteRenderer sr)
            {
                sr.sortingLayerName = sortingLayerName;
                sr.sortingOrder = baseOrderInLayer;
            }
            else if (rend is CanvasRenderer || rend is MeshRenderer)
            {
                // 修改材质 RenderQueue
                foreach (var mat in rend.sharedMaterials)
                {
                    if (mat != null)
                        mat.renderQueue = 3100; // 默认 UI 3000，强制前置
                }
            }
        }
    }

    // 如果 Canvas 或排序层变了，可以动态刷新
    public void Refresh()
    {
        ApplySorting();
    }
}
