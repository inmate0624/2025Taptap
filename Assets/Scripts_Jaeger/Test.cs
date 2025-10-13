
using System;
using UnityEngine;

public class Test : MonoBehaviour
{
    private CardSystem cardSys => CardSystem.instance;
    private CardEventSystem recipeSys => CardEventSystem.instance;
    private StackSystem stackSys => StackSystem.instance;
    private void Start()
    {
        // 注册配方：Wood + Stone → Campfire
        recipeSys.RegisterRecipe(new Recipe("r1", new[] { "wood", "stone" }, new []{"campfire"}));
        cardSys.CreateCard("wood", "Wood", CardType.Resource, true, Vector2.zero);
        cardSys.CreateCard("stone", "Stone", CardType.Resource, true, Vector2.zero);
    }

    private void Update()
    {
        if (Input.GetKey(KeyCode.Space))
        {
            if (Input.GetKeyDown(KeyCode.Alpha1)) 
            {
                cardSys.CreateCard("wood", "Wood", CardType.Resource, true, Vector2.zero);
            }
            if (Input.GetKeyDown(KeyCode.Alpha2)) 
            {
                cardSys.CreateCard("stone", "Stone", CardType.Resource, true, Vector2.zero);
            }
        }

        if (Input.GetKeyDown(KeyCode.S)){
            cardSys.ShowAllCards();
        }
    }
}
