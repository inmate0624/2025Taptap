Shader "Hidden/Custom/RetroPixelArt"
{
    Properties
    {
        _MainTex ("MainTex", 2D) = "white" {}
        
        // 像素化效果
        _PixelSize ("Pixel Size", Range(1, 50)) = 4
        _PixelAspectRatio ("Pixel Aspect Ratio", Range(0.5, 2)) = 1
        
        // 调色板效果
        _PaletteSize ("Palette Size", Range(2, 64)) = 16
        _Dithering ("Dithering", Range(0, 1)) = 0.3
        
        // 扫描线
        _ScanlineIntensity ("Scanline Intensity", Range(0, 1)) = 0.2
        _ScanlineDensity ("Scanline Density", Range(0, 1000)) = 400
        
        // 边缘暗化
        _VignetteIntensity ("Vignette Intensity", Range(0, 1)) = 0.4
        _VignetteRadius ("Vignette Radius", Range(0, 1)) = 0.8
        
        // 色彩饱和度
        _Saturation ("Saturation", Range(0, 2)) = 1.2
        
        // 噪点
        _NoiseIntensity ("Noise Intensity", Range(0, 1)) = 0.05
    }
    
    SubShader
    {
        Tags { "RenderType"="Opaque" "RenderPipeline"="UniversalRenderPipeline" }
        Pass
        {
            Name "RetroPixelArt"
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
            
            float _PixelSize;
            float _PixelAspectRatio;
            float _PaletteSize;
            float _Dithering;
            float _ScanlineIntensity;
            float _ScanlineDensity;
            float _VignetteIntensity;
            float _VignetteRadius;
            float _Saturation;
            float _NoiseIntensity;
            
            // 随机函数
            float random(float2 st)
            {
                return frac(sin(dot(st.xy, float2(12.9898, 78.233))) * 43758.5453123);
            }
            
            // 抖动函数
            float dither(float2 uv, float value)
            {
                float2 pixelPos = floor(uv * _ScreenParams.xy);
                float noise = random(pixelPos) * 2.0 - 1.0;
                return value + noise * _Dithering;
            }
            
            // 调色板量化
            float3 quantizeColor(float3 color, float paletteSize)
            {
                return floor(color * paletteSize) / paletteSize;
            }
            
            // 饱和度调整
            float3 adjustSaturation(float3 color, float saturation)
            {
                float luminance = dot(color, float3(0.299, 0.587, 0.114));
                return lerp(float3(luminance, luminance, luminance), color, saturation);
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
                
                // 1. 像素化
                float2 pixelatedUV = floor(uv * _ScreenParams.xy / _PixelSize) * _PixelSize / _ScreenParams.xy;
                
                // 调整像素宽高比
                pixelatedUV.x *= _PixelAspectRatio;
                
                // 2. 采样颜色
                half3 color = SAMPLE_TEXTURE2D_X(_MainTex, sampler_MainTex, pixelatedUV).rgb;
                
                // 3. 抖动
                color.r = dither(pixelatedUV, color.r);
                color.g = dither(pixelatedUV, color.g);
                color.b = dither(pixelatedUV, color.b);
                
                // 4. 调色板量化
                color = quantizeColor(color, _PaletteSize);
                
                // 5. 饱和度调整
                color = adjustSaturation(color, _Saturation);
                
                // 6. 扫描线效果
                float scanline = sin(uv.y * _ScanlineDensity) * 0.5 + 0.5;
                color *= lerp(1.0, scanline, _ScanlineIntensity);
                
                // 7. 噪点
                float noiseValue = random(uv + _Time.y) * 2.0 - 1.0;
                color += noiseValue * _NoiseIntensity;
                
                // 8. 边缘暗化
                float2 center = float2(0.5, 0.5);
                float vignetteDistance = length(uv - center);
                float vignette = 1.0 - smoothstep(_VignetteRadius, 1.0, vignetteDistance);
                color *= lerp(1.0, vignette, _VignetteIntensity);
                
                return half4(color, 1.0);
            }
            ENDHLSL
        }
    }
}
