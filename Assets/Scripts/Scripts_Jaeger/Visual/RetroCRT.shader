Shader "Hidden/Custom/RetroCRT"
{
    Properties
    {
        _MainTex ("MainTex", 2D) = "white" {}
        
        // 鱼眼效果
        _FisheyeIntensity ("Fisheye Intensity", Range(0, 1)) = 0.1
        _FisheyeRadius ("Fisheye Radius", Range(0, 1)) = 0.5
        
        // 扫描线效果
        _ScanlineIntensity ("Scanline Intensity", Range(0, 1)) = 0.3
        _ScanlineDensity ("Scanline Density", Range(0, 2000)) = 800
        _ScanlineSpeed ("Scanline Speed", Range(0, 10)) = 1
        
        // 色差效果
        _ChromaticAberration ("Chromatic Aberration", Range(0, 0.01)) = 0.002
        
        // 噪点效果
        _NoiseIntensity ("Noise Intensity", Range(0, 1)) = 0.1
        _NoiseScale ("Noise Scale", Range(0, 100)) = 50
        
        // 屏幕弯曲
        _ScreenCurvature ("Screen Curvature", Range(0, 0.1)) = 0.02
        
        // 整体亮度/对比度
        _Brightness ("Brightness", Range(0, 2)) = 1
        _Contrast ("Contrast", Range(0, 2)) = 1
        
        // 边缘暗化
        _VignetteIntensity ("Vignette Intensity", Range(0, 1)) = 0.3
        _VignetteRadius ("Vignette Radius", Range(0, 1)) = 0.8
    }
    
    SubShader
    {
        Tags { "RenderType"="Opaque" "RenderPipeline"="UniversalRenderPipeline" }
        Pass
        {
            Name "RetroCRT"
            ZTest Always Cull Off ZWrite Off
            
            HLSLPROGRAM
            #pragma vertex VertDefault
            #pragma fragment Frag
            
            #include "Packages/com.unity.render-pipelines.universal/ShaderLibrary/Core.hlsl"
            
            struct Attributes 
            { 
                float4 positionOS : POSITION; 
                float2 uv : TEXCOORD0; 
            };
            
            struct Varyings 
            { 
                float4 positionHCS : SV_POSITION; 
                float2 uv : TEXCOORD0; 
            };
            
            TEXTURE2D_X(_MainTex);
            SAMPLER(sampler_MainTex);
            
            // 鱼眼效果参数
            float _FisheyeIntensity;
            float _FisheyeRadius;
            
            // 扫描线效果参数
            float _ScanlineIntensity;
            float _ScanlineDensity;
            float _ScanlineSpeed;
            
            // 色差效果参数
            float _ChromaticAberration;
            
            // 噪点效果参数
            float _NoiseIntensity;
            float _NoiseScale;
            
            // 屏幕弯曲参数
            float _ScreenCurvature;
            
            // 亮度对比度参数
            float _Brightness;
            float _Contrast;
            
            // 边缘暗化参数
            float _VignetteIntensity;
            float _VignetteRadius;
            
            // 随机函数
            float random(float2 st)
            {
                return frac(sin(dot(st.xy, float2(12.9898, 78.233))) * 43758.5453123);
            }
            
            // 噪点函数
            float noise(float2 st)
            {
                float2 i = floor(st);
                float2 f = frac(st);
                
                float a = random(i);
                float b = random(i + float2(1.0, 0.0));
                float c = random(i + float2(0.0, 1.0));
                float d = random(i + float2(1.0, 1.0));
                
                float2 u = f * f * (3.0 - 2.0 * f);
                
                return lerp(a, b, u.x) + (c - a) * u.y * (1.0 - u.x) + (d - b) * u.x * u.y;
            }
            
            Varyings VertDefault(Attributes v)
            {
                Varyings o;
                o.positionHCS = TransformObjectToHClip(v.positionOS.xyz);
                o.uv = v.uv;
                return o;
            }
            
            half4 Frag(Varyings i) : SV_Target
            {
                float2 uv = i.uv;
                
                // 1. 屏幕弯曲效果
                float2 center = float2(0.5, 0.5);
                float2 offset = uv - center;
                float distance = length(offset);
                
                if (distance < _ScreenCurvature)
                {
                    float factor = (1.0 - distance / _ScreenCurvature);
                    offset *= (1.0 + factor * factor * 0.1);
                    uv = center + offset;
                }
                
                // 2. 鱼眼效果
                float2 fisheyeOffset = uv - center;
                float fisheyeDistance = length(fisheyeOffset);
                
                if (fisheyeDistance < _FisheyeRadius)
                {
                    float fisheyeFactor = fisheyeDistance / _FisheyeRadius;
                    fisheyeFactor = 1.0 - fisheyeFactor * fisheyeFactor;
                    fisheyeOffset *= (1.0 + fisheyeFactor * _FisheyeIntensity);
                    uv = center + fisheyeOffset;
                }
                
                // 3. 色差效果
                float2 chromaticOffset = normalize(fisheyeOffset) * _ChromaticAberration;
                
                float r = SAMPLE_TEXTURE2D_X(_MainTex, sampler_MainTex, uv + chromaticOffset).r;
                float g = SAMPLE_TEXTURE2D_X(_MainTex, sampler_MainTex, uv).g;
                float b = SAMPLE_TEXTURE2D_X(_MainTex, sampler_MainTex, uv - chromaticOffset).b;
                
                half3 color = half3(r, g, b);
                
                // 4. 扫描线效果
                float time = _Time.y * _ScanlineSpeed;
                float scanline = sin((uv.y + time) * _ScanlineDensity) * 0.5 + 0.5;
                color *= lerp(1.0, scanline, _ScanlineIntensity);
                
                // 5. 噪点效果
                float noiseValue = noise(uv * _NoiseScale + _Time.y);
                color += (noiseValue - 0.5) * _NoiseIntensity;
                
                // 6. 亮度对比度调整
                color = (color - 0.5) * _Contrast + 0.5;
                color *= _Brightness;
                
                // 7. 边缘暗化效果
                float vignetteDistance = length(uv - center);
                float vignette = 1.0 - smoothstep(_VignetteRadius, 1.0, vignetteDistance);
                color *= lerp(1.0, vignette, _VignetteIntensity);
                
                return half4(color, 1.0);
            }
            ENDHLSL
        }
    }
}
