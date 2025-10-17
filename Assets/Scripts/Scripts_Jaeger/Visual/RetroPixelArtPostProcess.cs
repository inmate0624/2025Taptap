using UnityEngine;
using UnityEngine.Rendering;
using UnityEngine.Rendering.Universal;
using UnityEngine.Rendering.RenderGraphModule;

[System.Serializable]
public class RetroPixelArtSettings
{
    [Header("像素化效果")]
    [Range(1f, 50f)]
    public float pixelSize = 4f;
    
    [Range(0.5f, 2f)]
    public float pixelAspectRatio = 1f;
    
    [Header("调色板效果")]
    [Range(2f, 64f)]
    public float paletteSize = 16f;
    
    [Range(0f, 1f)]
    public float dithering = 0.3f;
    
    [Header("扫描线")]
    [Range(0f, 1f)]
    public float scanlineIntensity = 0.2f;
    
    [Range(0f, 1000f)]
    public float scanlineDensity = 400f;
    
    [Header("边缘暗化")]
    [Range(0f, 1f)]
    public float vignetteIntensity = 0.4f;
    
    [Range(0f, 1f)]
    public float vignetteRadius = 0.8f;
    
    [Header("色彩调整")]
    [Range(0f, 2f)]
    public float saturation = 1.2f;
    
    [Range(0f, 1f)]
    public float noiseIntensity = 0.05f;
    
    [Header("整体开关")]
    public bool enableEffect = true;
}

[System.Serializable, VolumeComponentMenu("Custom/RetroPixelArt")]
public class RetroPixelArtPostProcess : VolumeComponent, IPostProcessComponent
{
    [Header("像素化效果")]
    public ClampedFloatParameter pixelSize = new ClampedFloatParameter(4f, 1f, 50f);
    public ClampedFloatParameter pixelAspectRatio = new ClampedFloatParameter(1f, 0.5f, 2f);
    
    [Header("调色板效果")]
    public ClampedFloatParameter paletteSize = new ClampedFloatParameter(16f, 2f, 64f);
    public ClampedFloatParameter dithering = new ClampedFloatParameter(0.3f, 0f, 1f);
    
    [Header("扫描线")]
    public ClampedFloatParameter scanlineIntensity = new ClampedFloatParameter(0.2f, 0f, 1f);
    public ClampedFloatParameter scanlineDensity = new ClampedFloatParameter(400f, 0f, 1000f);
    
    [Header("边缘暗化")]
    public ClampedFloatParameter vignetteIntensity = new ClampedFloatParameter(0.4f, 0f, 1f);
    public ClampedFloatParameter vignetteRadius = new ClampedFloatParameter(0.8f, 0f, 1f);
    
    [Header("色彩调整")]
    public ClampedFloatParameter saturation = new ClampedFloatParameter(1.2f, 0f, 2f);
    public ClampedFloatParameter noiseIntensity = new ClampedFloatParameter(0.05f, 0f, 1f);
    
    [Header("整体开关")]
    public BoolParameter enableEffect = new BoolParameter(true);
    
    public bool IsActive() => enableEffect.value && (pixelSize.value > 1f || scanlineIntensity.value > 0f || 
                                                   vignetteIntensity.value > 0f || saturation.value != 1f);
    
    public bool IsTileCompatible() => false;
}

public class RetroPixelArtRendererFeature : ScriptableRendererFeature
{
    [System.Serializable]
    public class Settings
    {
        public RenderPassEvent renderPassEvent = RenderPassEvent.BeforeRenderingPostProcessing;
        public Material material;
    }
    
    public Settings settings = new Settings();
    private RetroPixelArtRenderPass renderPass;
    
    public override void Create()
    {
        renderPass = new RetroPixelArtRenderPass(settings);
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

public class RetroPixelArtRenderPass : ScriptableRenderPass
{
    private Material material;
    private RetroPixelArtPostProcess volumeComponent;
    private const string ProfilerTag = "RetroPixelArt Post Processing";
    
    public RetroPixelArtRenderPass(RetroPixelArtRendererFeature.Settings settings)
    {
        this.material = settings.material;
        renderPassEvent = settings.renderPassEvent;
    }
    
    [System.Obsolete]
    public override void Execute(ScriptableRenderContext context, ref RenderingData renderingData)
    {
        if (material == null) return;
        
        var stack = VolumeManager.instance.stack;
        volumeComponent = stack.GetComponent<RetroPixelArtPostProcess>();
        
        if (volumeComponent == null || !volumeComponent.IsActive()) return;
        
        var cmd = CommandBufferPool.Get(ProfilerTag);
        
        // 设置shader参数
        material.SetFloat("_PixelSize", volumeComponent.pixelSize.value);
        material.SetFloat("_PixelAspectRatio", volumeComponent.pixelAspectRatio.value);
        material.SetFloat("_PaletteSize", volumeComponent.paletteSize.value);
        material.SetFloat("_Dithering", volumeComponent.dithering.value);
        material.SetFloat("_ScanlineIntensity", volumeComponent.scanlineIntensity.value);
        material.SetFloat("_ScanlineDensity", volumeComponent.scanlineDensity.value);
        material.SetFloat("_VignetteIntensity", volumeComponent.vignetteIntensity.value);
        material.SetFloat("_VignetteRadius", volumeComponent.vignetteRadius.value);
        material.SetFloat("_Saturation", volumeComponent.saturation.value);
        material.SetFloat("_NoiseIntensity", volumeComponent.noiseIntensity.value);
        
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
