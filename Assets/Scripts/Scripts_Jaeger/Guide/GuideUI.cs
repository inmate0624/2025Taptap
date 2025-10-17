using UnityEngine;
using UnityEngine.EventSystems;
using UnityEngine.UI;

public class GuideUI : MonoBehaviour, IPointerUpHandler
{
    [SerializeField] private Image _image;

    public void OnPointerUp(PointerEventData eventData)
    {
        
        ShowGuide();
        Debug.Log("OnPointerUp");
    }

    private void ShowGuide()
    {
        if (CardSystem.instance.DraggingCardBoard.Cards.Count != 1) return;
        Debug.Log($"拖拽了{CardSystem.instance.DraggingCardBoard.Cards[0].Name}");
    }
}