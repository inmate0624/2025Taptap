using UnityEngine;
using UnityEngine.UI;
using System;
using Manager;

/// <summary>
/// 游戏设置管理脚本
/// 用于处理游戏设置界面的交互和设置保存
/// </summary>
public class Setting : MonoBehaviour
{
    [Header("设置面板")]
    [SerializeField] private GameObject settingPanel; // 设置面板对象
    [SerializeField] private Button closeButton; // 关闭设置面板按钮

    [Header("音频设置-按钮控制")]
    [SerializeField] private Button bgmToggleButton; // 背景音乐开关按钮
    [SerializeField] private Button sfxToggleButton; // 音效开关按钮
    [SerializeField] private Text bgmStatusText; // 背景音乐状态文本
    [SerializeField] private Text sfxStatusText; // 音效状态文本

    [Header("其他设置")]
    [SerializeField] private Toggle fullscreenToggle; // 全屏开关

    // 音频管理相关
    private float defaultBgmVolume = 0.7f;
    private float defaultSfxVolume = 1.0f;
    private bool isBgmEnabled = true; // 背景音乐状态
    private bool isSfxEnabled = true; // 音效状态

    // 设置键名常量
    private const string BGM_ENABLED_KEY = "BGMEnabled";
    private const string SFX_ENABLED_KEY = "SFXEnabled";
    private const string BGM_VOLUME_KEY = "BGMVolume";
    private const string SFX_VOLUME_KEY = "SFXVolume";
    private const string FULLSCREEN_KEY = "Fullscreen";

    // Start is called once before the first execution of Update after the MonoBehaviour is created
    void Start()
    {
        // 初始化设置面板状态
        if (settingPanel != null)
        {
            settingPanel.SetActive(false);
        }

        // 加载保存的设置
        LoadSettings();

        // 添加UI事件监听
        SetupUIEventListeners();
    }

    /// <summary>
    /// 设置UI事件监听器
    /// </summary>
    private void SetupUIEventListeners()
    {
        if (bgmToggleButton != null)
            bgmToggleButton.onClick.AddListener(OnBgmButtonClicked);

        if (sfxToggleButton != null)
            sfxToggleButton.onClick.AddListener(OnSfxButtonClicked);

        if (fullscreenToggle != null)
            fullscreenToggle.onValueChanged.AddListener(OnFullscreenToggleChanged);

        if (closeButton != null)
            closeButton.onClick.AddListener(HideSettingPanel);
    }

    /// <summary>
    /// 加载保存的设置
    /// </summary>
    private void LoadSettings()
    {
        // 加载音频设置
        isBgmEnabled = PlayerPrefs.GetInt(BGM_ENABLED_KEY, 1) == 1;
        isSfxEnabled = PlayerPrefs.GetInt(SFX_ENABLED_KEY, 1) == 1;
        float bgmVolume = PlayerPrefs.GetFloat(BGM_VOLUME_KEY, defaultBgmVolume);
        float sfxVolume = PlayerPrefs.GetFloat(SFX_VOLUME_KEY, defaultSfxVolume);

        // 加载显示设置
        bool fullscreen = PlayerPrefs.GetInt(FULLSCREEN_KEY, 1) == 1;
        Screen.fullScreen = fullscreen;

        // 更新UI组件
        UpdateAudioStatusUI();

        if (fullscreenToggle != null)
            fullscreenToggle.isOn = fullscreen;

        // 应用音频设置
        ApplyAudioSettings(isBgmEnabled, bgmVolume, isSfxEnabled, sfxVolume);
    }

    /// <summary>
    /// 保存设置到PlayerPrefs
    /// </summary>
    private void SaveSettings()
    {
        PlayerPrefs.SetInt(BGM_ENABLED_KEY, isBgmEnabled ? 1 : 0);
        PlayerPrefs.SetInt(SFX_ENABLED_KEY, isSfxEnabled ? 1 : 0);
        
        // 保留音量设置，以便将来可能需要
        float bgmVolume = PlayerPrefs.GetFloat(BGM_VOLUME_KEY, defaultBgmVolume);
        PlayerPrefs.SetFloat(SFX_VOLUME_KEY, defaultSfxVolume);

        if (fullscreenToggle != null)
            PlayerPrefs.SetInt(FULLSCREEN_KEY, fullscreenToggle.isOn ? 1 : 0);

        PlayerPrefs.Save();
    }

    /// <summary>
    /// 应用音频设置
    /// </summary>
    private void ApplyAudioSettings(bool bgmEnabled, float bgmVolume, bool sfxEnabled, float sfxVolume)
    {
        // 通过AudioManager应用音频设置
        AudioManager audioManager = AudioManager.instance;
        if (audioManager != null)
        {
            // 设置背景音乐
            if (audioManager.currentBGM != null)
            {
                audioManager.currentBGM.mute = !bgmEnabled;
                audioManager.currentBGM.volume = bgmVolume;
            }
            
            // 设置音效
            if (audioManager.currentEffectMusic != null)
            {
                audioManager.currentEffectMusic.mute = !sfxEnabled;
                audioManager.currentEffectMusic.volume = sfxVolume;
            }
        }
    }

    // UI事件处理方法

    /// <summary>
    /// 更新音频状态UI显示
    /// </summary>
    private void UpdateAudioStatusUI()
    {
        if (bgmStatusText != null)
        {
            bgmStatusText.text = isBgmEnabled ? "背景音乐: 开" : "背景音乐: 关";
        }
        
        if (sfxStatusText != null)
        {
            sfxStatusText.text = isSfxEnabled ? "音效: 开" : "音效: 关";
        }
    }

    /// <summary>
    /// 背景音乐按钮点击处理
    /// </summary>
    public void OnBgmButtonClicked()
    {
        // 切换背景音乐状态
        isBgmEnabled = !isBgmEnabled;
        
        // 更新UI显示
        UpdateAudioStatusUI();
        
        // 通过AudioManager应用设置
        AudioManager audioManager = AudioManager.instance;
        if (audioManager != null && audioManager.currentBGM != null)
        {
            audioManager.currentBGM.mute = !isBgmEnabled;
        }
        
        SaveSettings();
    }

    /// <summary>
    /// 音效按钮点击处理
    /// </summary>
    public void OnSfxButtonClicked()
    {
        // 切换音效状态
        isSfxEnabled = !isSfxEnabled;
        
        // 更新UI显示
        UpdateAudioStatusUI();
        
        // 通过AudioManager应用设置
        AudioManager audioManager = AudioManager.instance;
        if (audioManager != null && audioManager.currentEffectMusic != null)
        {
            audioManager.currentEffectMusic.mute = !isSfxEnabled;
        }
        
        SaveSettings();
    }

    /// <summary>
    /// 全屏开关变化处理
    /// </summary>
    public void OnFullscreenToggleChanged(bool isFullscreen)
    {
        Screen.fullScreen = isFullscreen;
        SaveSettings();
    }

    // 公共方法，用于UI按钮调用

    /// <summary>
    /// 显示设置面板
    /// </summary>
    public void ShowSettingPanel()
    {
        if (settingPanel != null)
        {
            settingPanel.SetActive(true);
            // 暂停游戏时间
            Time.timeScale = 0f;
        }
    }

    /// <summary>
    /// 隐藏设置面板
    /// </summary>
    public void HideSettingPanel()
    {
        if (settingPanel != null)
        {
            settingPanel.SetActive(false);
            // 恢复游戏时间
            Time.timeScale = 1f;
        }
    }

    /// <summary>
    /// 切换设置面板的显示状态
    /// </summary>
    public void ToggleSettingPanel()
    {
        if (settingPanel != null)
        {
            if (settingPanel.activeSelf)
            {
                HideSettingPanel();
            }
            else
            {
                ShowSettingPanel();
            }
        }
    }

    /// <summary>
    /// 重置所有设置为默认值
    /// </summary>
    public void ResetToDefaults()
    {
        // 重置音频设置
        isBgmEnabled = true;
        isSfxEnabled = true;
        
        // 更新UI显示
        UpdateAudioStatusUI();

        if (fullscreenToggle != null)
            fullscreenToggle.isOn = true;

        // 应用设置
        Screen.fullScreen = true;
        ApplyAudioSettings(true, defaultBgmVolume, true, defaultSfxVolume);
        SaveSettings();
    }

    /// <summary>
    /// 播放测试音效
    /// </summary>
    public void PlayTestSound(AudioClip clip)
    {
        if (clip != null && isSfxEnabled && AudioManager.instance != null)
        {
            // 确保音效管理器可用
            AudioManager audioManager = AudioManager.instance;
            if (audioManager != null && audioManager.currentEffectMusic != null)
            {
                audioManager.currentEffectMusic.PlayOneShot(clip, defaultSfxVolume);
            }
        }
    }
}
