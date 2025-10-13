using System;
using System.Collections.Generic;
using System.Linq;
using UnityEngine;

public class TestManager : MonoBehaviour
{
    private static TestManager _instance;
    public static TestManager Instance;

    [SerializeField]
    private bool _showDebug = false;
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

    }

    void Start()
    {
        TestInit();
    }

    [RuntimeInitializeOnLoadMethod(RuntimeInitializeLoadType.BeforeSceneLoad)]
    private static void OnInit(){
        StackSystem.ResetStackId();
    }

    void Update()
    {
        TestInput();

        LayerMask layerMask = LayerMask.GetMask("Card");
        List<RaycastHit2D> hit = Physics2D.RaycastAll(Utility.GetMousePosition(), Vector2.zero, layerMask).ToList();
        hit.RemoveAll(h => h.collider.gameObject.layer != LayerMask.NameToLayer("Card"));
        if (hit.Count == 0)
        {
            return;
        }
        if (_showDebug) Debug.Log("Hit: " + hit[0].collider.name);
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

    private void TestInit(){
        // 注册配方：Wood + Stone → Campfire
        CardEventSystem.instance.RegisterRecipe(new Recipe("r1", new[] { "wood", "stone" }, new []{"campfire"}, 1f));
        CardSystem.instance.CreateCard("wood", "Wood", CardType.Resource, true, Vector2.zero);
        CardSystem.instance.CreateCard("stone", "Stone", CardType.Resource, true, Vector2.zero);  
    }

    private void TestInput(){
        if (Input.GetKey(KeyCode.Space))
        {
            if (Input.GetKeyDown(KeyCode.Alpha1)) 
            {
                CardSystem.instance.CreateCard("wood", "Wood", CardType.Resource, true, Vector2.zero);
            }
            if (Input.GetKeyDown(KeyCode.Alpha2)) 
            {
                CardSystem.instance.CreateCard("stone", "Stone", CardType.Resource, true, Vector2.zero);
            }
        }

        if (Input.GetKeyDown(KeyCode.S)){
            CardSystem.instance.ShowAllCards();
        }
    }
}
