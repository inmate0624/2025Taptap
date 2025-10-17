using UnityEngine;
using UnityEngine.Rendering;
using UnityEngine.Rendering.Universal;
using UnityEngine.Rendering.RenderGraphModule;

[System.Serializable]
public class RetroCRTSettings
{
    [Header("鱼眼效果")]
    [Range(0f, 1f)]
    public float fisheyeIntensity = 0.1f;
    
    [Range(0f, 1f)]
    public float fisheyeRadius = 0.5f;
    
    [Header("扫描线效果")]
    [Range(0f, 1f)]
    public float scanlineIntensity = 0.3f;
    
    [Range(0f, 2000f)]
    public float scanlineDensity = 800f;
    
    [Range(0f, 10f)]
    public float scanlineSpeed = 1f;
    
    [Header("色差效果")]
    [Range(0f, 0.01f)]
    public float chromaticAberration = 0.002f;
    
    [Header("噪点效果")]
    [Range(0f, 1f)]
    public float noiseIntensity = 0.1f;
    
    [Range(0f, 100f)]
    public float noiseScale = 50f;
    
    [Header("屏幕弯曲")]
    [Range(0f, 0.1f)]
    public float screenCurvature = 0.02f;
    
    [Header("亮度对比度")]
    [Range(0f, 2f)]
    public float brightness = 1f;
    
    [Range(0f, 2f)]
    public float contrast = 1f;
    
    [Header("边缘暗化")]
    [Range(0f, 1f)]
    public float vignetteIntensity = 0.3f;
    
    [Range(0f, 1f)]
    public float vignetteRadius = 0.8f;
    
    [Header("像素化效果")]
    [Range(1f, 20f)]
    public float pixelSize = 1f;
    
    [Header("色彩分离")]
    [Range(0f, 0.01f)]
    public float colorSeparation = 0.003f;
    
    [Header("整体开关")]
    public bool enableEffect = true;
}


public class RetroCRTRendererFeature : ScriptableRendererFeature
{
    [System.Serializable]
    public class Settings
    {
        public RenderPassEvent renderPassEvent = RenderPassEvent.BeforeRenderingPostProcessing;
        public Material material;
    }
    
    public Settings settings = new Settings();
    private RetroCRTRenderPass renderPass;
    
    public override void Create()
    {
        renderPass = new RetroCRTRenderPass(settings);
    }
    
    public override void AddRenderPasses(ScriptableRenderer renderer, ref RenderingData renderingData)
    {
        if (settings.material == null)
        {
            Debug.LogWarningFormat("Missing Material. {0} render pass will not execute. Check for missing reference in the renderer resources.", GetType().Name);
            return;
        }
        
        renderPass.ConfigureInput(ScriptableRenderPassInput.Color);
        renderer.EnqueuePass(renderPass);
    }
}

public class RetroCRTRenderPass : ScriptableRenderPass
{
    private Material material;
    private RetroCRTVolume volumeComponent;
    private const string ProfilerTag = "RetroCRT Post Processing";
    
    public RetroCRTRenderPass(RetroCRTRendererFeature.Settings settings)
    {
        this.material = settings.material;
        renderPassEvent = settings.renderPassEvent;
    }
    
    [System.Obsolete]
    public override void Execute(ScriptableRenderContext context, ref RenderingData renderingData)
    {
        if (material == null) return;
        
        var stack = VolumeManager.instance.stack;
        volumeComponent = stack.GetComponent<RetroCRTVolume>();
        
        if (volumeComponent == null || !volumeComponent.IsActive()) return;
        
        var cmd = CommandBufferPool.Get(ProfilerTag);
        
        // 设置shader参数
        material.SetFloat("_FisheyeIntensity", volumeComponent.fisheyeIntensity.value);
        material.SetFloat("_FisheyeRadius", volumeComponent.fisheyeRadius.value);
        material.SetFloat("_ScanlineIntensity", volumeComponent.scanlineIntensity.value);
        material.SetFloat("_ScanlineDensity", volumeComponent.scanlineDensity.value);
        material.SetFloat("_ScanlineSpeed", volumeComponent.scanlineSpeed.value);
        material.SetFloat("_ChromaticAberration", volumeComponent.chromaticAberration.value);
        material.SetFloat("_NoiseIntensity", volumeComponent.noiseIntensity.value);
        material.SetFloat("_NoiseScale", volumeComponent.noiseScale.value);
        material.SetFloat("_ScreenCurvature", volumeComponent.screenCurvature.value);
        material.SetFloat("_Brightness", volumeComponent.brightness.value);
        material.SetFloat("_Contrast", volumeComponent.contrast.value);
        material.SetFloat("_VignetteIntensity", volumeComponent.vignetteIntensity.value);
        material.SetFloat("_VignetteRadius", volumeComponent.vignetteRadius.value);
        
        // 执行blit
        cmd.Blit(null, BuiltinRenderTextureType.CameraTarget, material);
        
        context.ExecuteCommandBuffer(cmd);
        CommandBufferPool.Release(cmd);
    }
    
    public override void RecordRenderGraph(RenderGraph renderGraph, ContextContainer frameData)
    {
        // Render Graph implementation is complex and requires specific API knowledge
        // For now, this pass will work in compatibility mode
        // To enable Render Graph support, please refer to Unity's documentation:
        // https://docs.unity3d.com/Packages/com.unity.render-pipelines.universal@latest/index.html?subfolder=/manual/customizing-urp.html
    }
    
    private class PassData
    {
        public Material material;
    }
}
