using System.Collections.Generic;
using Base;
using UnityEngine;

namespace Manager
{
    public class FXManager : SingletonBase<FXManager>
    {
        public enum EffectState
        {
            Normal,
            Glitch_A,
            Glitch_B,
            TV_NoSignal
        }
        
        [System.Serializable]
        public class EffectConfig
        {
            public EffectState state;
            [Header("对应材质")]
            public Material material;
            public float intensity = 0f;
        }
        public List<EffectConfig> effects = new List<EffectConfig>();
        public ParticleSystem[] particleSystems;
        
        //组件
        public Renderer targetRenderer;
        public Material defaultMaterial;

        private Material currentMaterial;
        private EffectState currentEffectState;

        //方便快速查找的字典
        private Dictionary<EffectState, EffectConfig> effectsDic;
        
        //属性字符串封装
        private static readonly int IntensityID = Shader.PropertyToID("_Intensity");

        public override void Awake()
        {
            base.Awake();

            //组件实例判空
            if (targetRenderer is null)
            {
                Debug.LogError("[FXManager] Renderer Component is null.");
                enabled = false;
                return;
            }

            //材质实例
            currentMaterial = targetRenderer.material;

            //特效字典实例
            effectsDic = new Dictionary<EffectState, EffectConfig>();
            foreach (var effect in effects)
            {
                effectsDic.TryAdd(effect.state, effect);
            }
            
            //设置默认状态
            SetEffectState(EffectState.Normal);
        }

        /// <summary>
        /// 切换材质状态
        /// </summary>
        /// <param name="_newState"></param>
        public void SetEffectState(EffectState _newState)
        {
            if (currentEffectState == _newState) return;

            //切换状态
            currentEffectState = _newState;

            //状态配置
            if (effectsDic.TryGetValue(_newState, out EffectConfig _config))
            {
                //切换材质（在Shader不同时）
                if (_config.material is not null && currentMaterial.shader != _config.material.shader)
                {
                    targetRenderer.material = _config.material;
                    currentMaterial = targetRenderer.material;
                }
                else if (_config.material is not null)  
                {
                    //这里只切换Shader，然后单独写方法去控制属性
                }

                //属性配置
                if (_config.intensity >= 0 & currentMaterial.HasProperty(IntensityID))
                {
                    currentMaterial.SetFloat(IntensityID,_config.intensity);
                }
            }

            //如果待切换的状态是默认状态
            if (_newState == EffectState.Normal)
            {
                if (defaultMaterial is not null)
                {
                    targetRenderer.material = defaultMaterial;
                    currentMaterial = targetRenderer.material;
                }
                else
                {
                    Debug.LogError("[FXManager] Default material is null.");
                }
            }
        }
    }
}
