using UnityEngine;
using UnityEngine.Rendering;
using UnityEngine.Rendering.Universal;

[System.Serializable, VolumeComponentMenu("Custom/RetroCRT")]
public class RetroCRTVolume : VolumeComponent, IPostProcessComponent
{
    [Header("鱼眼效果")]
    public ClampedFloatParameter fisheyeIntensity = new ClampedFloatParameter(0.1f, 0f, 1f);
    public ClampedFloatParameter fisheyeRadius = new ClampedFloatParameter(0.5f, 0f, 1f);
    
    [Header("扫描线效果")]
    public ClampedFloatParameter scanlineIntensity = new ClampedFloatParameter(0.3f, 0f, 1f);
    public ClampedFloatParameter scanlineDensity = new ClampedFloatParameter(800f, 0f, 2000f);
    public ClampedFloatParameter scanlineSpeed = new ClampedFloatParameter(1f, 0f, 10f);
    
    [Header("色差效果")]
    public ClampedFloatParameter chromaticAberration = new ClampedFloatParameter(0.002f, 0f, 0.01f);
    
    [Header("噪点效果")]
    public ClampedFloatParameter noiseIntensity = new ClampedFloatParameter(0.1f, 0f, 1f);
    public ClampedFloatParameter noiseScale = new ClampedFloatParameter(50f, 0f, 100f);
    
    [Header("屏幕弯曲")]
    public ClampedFloatParameter screenCurvature = new ClampedFloatParameter(0.02f, 0f, 0.1f);
    
    [Header("亮度对比度")]
    public ClampedFloatParameter brightness = new ClampedFloatParameter(1f, 0f, 2f);
    public ClampedFloatParameter contrast = new ClampedFloatParameter(1f, 0f, 2f);
    
    [Header("边缘暗化")]
    public ClampedFloatParameter vignetteIntensity = new ClampedFloatParameter(0.3f, 0f, 1f);
    public ClampedFloatParameter vignetteRadius = new ClampedFloatParameter(0.8f, 0f, 1f);

    public bool IsActive() => fisheyeIntensity.value > 0f || scanlineIntensity.value > 0f || 
                             chromaticAberration.value > 0f || noiseIntensity.value > 0f || 
                             screenCurvature.value > 0f || vignetteIntensity.value > 0f ||
                             brightness.value != 1f || contrast.value != 1f;
    public bool IsTileCompatible() => false;
}
