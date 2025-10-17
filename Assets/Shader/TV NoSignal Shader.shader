Shader "Custom/SpriteGlitch"
{
    Properties
    {
        [PerRendererData] _MainTex ("Sprite Texture", 2D) = "white" {}
        _Color ("Tint", Color) = (1,1,1,1)
        [MaterialToggle] PixelSnap ("Pixel snap", Float) = 0
        
        // 自定义干扰属性
        _GlitchIntensity ("Glitch Intensity", Range(0, 0.1)) = 0.03
        _BlockSize ("Block Size", Range(1, 100)) = 50.0
        _ColorShift ("Color Shift", Range(0, 0.05)) = 0.01
        _NoiseAmount ("Noise Amount", Range(0, 0.2)) = 0.05
        _FlickerSpeed ("Flicker Speed", Range(1, 50)) = 10.0
    }

    SubShader
    {
        // 确保它能作为Sprite Shader工作，并且支持透明度
        Tags
        { 
            "Queue"="Transparent" 
            "IgnoreProjector"="True" 
            "RenderType"="Transparent" 
            "PreviewType"="Plane"
            "CanUseSpriteAtlas"="True" // 允许使用Sprite Atlas
        }

        Cull Off
        Lighting Off
        ZWrite Off
        Blend SrcAlpha OneMinusSrcAlpha // 标准的透明混合

        Pass
        {
            CGPROGRAM
            #pragma vertex vert
            #pragma fragment frag
            #pragma target 2.0
            #pragma multi_compile _ PIXELSNAP_ON

            #include "UnityCG.cginc"

            struct appdata_t
            {
                float4 vertex   : POSITION;
                float4 color    : COLOR;
                float2 uv       : TEXCOORD0;
            };

            struct v2f
            {
                float4 vertex   : SV_POSITION;
                fixed4 color    : COLOR;
                float2 uv       : TEXCOORD0;
            };

            fixed4 _Color;
            sampler2D _MainTex;
            float _GlitchIntensity;
            float _BlockSize;
            float _ColorShift;
            float _NoiseAmount;
            float _FlickerSpeed; // 闪烁速度，让效果更动态

            v2f vert(appdata_t v)
            {
                v2f o;
                o.vertex = UnityObjectToClipPos(v.vertex);
                o.color = v.color * _Color;
                o.uv = v.uv;
                #ifdef PIXELSNAP_ON
                o.vertex = UnityPixelSnap(o.vertex);
                #endif
                return o;
            }
            
            // 伪随机数生成函数
            float rand(float2 uv)
            {
                return frac(sin(dot(uv, float2(12.9898, 78.233))) * 43758.5453);
            }

            fixed4 frag(v2f i) : SV_Target
            {
                float2 uv = i.uv;
                
                // 1. **水平条纹/块状干扰**
                // 将UV分成若干个块
                float yBlock = floor(uv.y * _BlockSize);
                // 为每个块生成一个随机偏移值，使用时间让效果动起来
                float randomOffset = rand(float2(yBlock, _Time.y * _FlickerSpeed)); // 加入_Time.y和FlickerSpeed
                
                // 干扰只在水平方向（U轴）进行
                // 随机偏移，乘以强度，并限制为周期性闪烁
                float offset = sin(_Time.y * 10.0 + yBlock * 0.5) * _GlitchIntensity * randomOffset;
                
                // 仅在随机数大于某个阈值时应用干扰，以实现闪烁效果
                // 同时加入_Time.y让这个阈值也动态变化
                if (rand(float2(_Time.y * _FlickerSpeed * 2, yBlock)) > 0.7) 
                {
                    uv.x += offset;
                }
                
                // 2. **RGB通道分离（色差）**
                // 采样红色通道
                float2 uv_r = uv + float2(_ColorShift, _ColorShift * 0.5);
                // 采样绿色通道
                float2 uv_g = uv;
                // 采样蓝色通道
                float2 uv_b = uv - float2(_ColorShift, _ColorShift * 0.5);

                fixed r = tex2D(_MainTex, uv_r).r;
                fixed g = tex2D(_MainTex, uv_g).g;
                fixed b = tex2D(_MainTex, uv_b).b;
                fixed a = tex2D(_MainTex, uv).a; // 保持原始Sprite的Alpha通道

                fixed4 finalColor = fixed4(r, g, b, a);
                
                // 3. **扫描线/噪声效果**
                // 添加一些基于UV的噪声，模拟老旧电视的颗粒感
                float noise = rand(uv * 100.0 + _Time.y * _FlickerSpeed * 0.5) * 2.0 - 1.0; // -1到1的随机值
                finalColor.rgb += noise * _NoiseAmount;
                
                // 4. **随机的整体颜色闪烁 (可选)**
                // 随机增加或减少一些整体亮度，让Sprite看起来不稳定
                float flicker = 1.0 + rand(float2(0, _Time.y * _FlickerSpeed)) * 0.2 - 0.1; // 亮度在-0.1到0.1之间变化
                finalColor.rgb *= flicker;
                
                // 乘以Sprite本身的颜色和顶点颜色
                finalColor.rgb *= i.color.rgb;
                finalColor.a *= i.color.a;

                return finalColor;
            }
            ENDCG
        }
    }
}