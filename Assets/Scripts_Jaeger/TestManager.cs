using System;
using System.Collections.Generic;
using System.Linq;
using UnityEngine;

public class TestManager : MonoBehaviour
{
    private static TestManager _instance;
    public static TestManager Instance;

    // public StackSystem stackSystem;
    // public CardEventSystem recipeSystem;
    // public CardSystem cardSystem;

    CardView _draggingCardView;
    private void Awake()
    {
        if (Instance == null)
        {
            Instance = this;
            DontDestroyOnLoad(this);
        }
        else
        {
            Destroy(this);
        }
        // cardSystem = new();
        // recipeSystem = new(cardSystem);
        // stackSystem = new(recipeSystem, cardSystem);
    }

    [RuntimeInitializeOnLoadMethod(RuntimeInitializeLoadType.BeforeSceneLoad)]
    private static void OnInit(){
        StackSystem.ResetStackId();
    }

    void Update()
    {
        LayerMask layerMask = LayerMask.GetMask("Card");
        List<RaycastHit2D> hit = Physics2D.RaycastAll(Utility.GetMousePosition(), Vector2.zero, layerMask).ToList();
        hit.RemoveAll(h => h.collider.gameObject.layer != LayerMask.NameToLayer("Card"));
        if (hit.Count == 0)
        {
            return;
        }

        Debug.Log("Hit: " + hit[0].collider.name);
        if (Input.GetMouseButtonDown(0)){
            if (_draggingCardView != null) return;

            CardView cardView = hit[0].collider.gameObject.GetComponent<CardView>();
            _draggingCardView = cardView;
            _draggingCardView.OnDragStart();
        }
        if (Input.GetMouseButtonUp(0)){
            if (_draggingCardView == null) return;

            _draggingCardView.OnDragEnd();
            _draggingCardView = null;
        }
    }
}
