using System;
using cfg;
using DG.Tweening;
using TMPro;
using UniRx;
using UnityEngine;
using UnityEngine.EventSystems;
using UnityEngine.UI;

public class GuideUI : MonoBehaviour
{
    [SerializeField] private Image _image;
    [SerializeField] private TextMeshProUGUI _text;
    [SerializeField] private CanvasGroup _guideText;
    private RectTransform _rectTransform;
    [SerializeField] private float _fadeDuration = 0.2f;
    private bool _hasShowed = false;

    void Awake()
    {
        _rectTransform = GetComponent<RectTransform>();
    }
    void Update()
    {
        bool isInside = UtilityJaeger.IsPointerOverUI(_rectTransform);

        if (isInside){
            if (Input.GetMouseButtonUp(0)){
                ShowGuide();
            }
        }

        if (Input.GetMouseButtonDown(0) && _hasShowed){
            _guideText.DOFade(0, _fadeDuration);
            _hasShowed = false;
        }
    }

    private void ShowGuide()
    {


        if (CardSystem.instance.DraggingCardBoard.Cards.Count != 1) return;
        Debug.Log($"俺寻思：{CardSystem.instance.DraggingCardBoard.Cards[0].Description}");
        _text.text = CardSystem.instance.DraggingCardBoard.Cards[0].Description;

        if (_hasShowed) return;
        _hasShowed = true;
        _guideText.DOFade(1, _fadeDuration);
    }


}