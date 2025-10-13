
using System;
using UnityEngine;

public class Test : MonoBehaviour
{
    private CardSystem cardSys => TestManager.Instance.cardSystem;
    private CardEventSystem recipeSys => TestManager.Instance.recipeSystem;
    private StackSystem stackSys => TestManager.Instance.stackSystem;
    private void Start()
    {
        // 注册配方：Wood + Stone → Campfire
        recipeSys.RegisterRecipe(new Recipe("r1", new[] { "wood", "stone" }, new []{"campfire"}));

        cardSys.CreateCard("wood", "Wood", CardType.Resource, true);
        cardSys.CreateCard("stone", "Stone", CardType.Resource, true);
    }

    private void Update()
    {
        if (Input.GetKey(KeyCode.Space))
        {
            if (Input.GetKeyDown(KeyCode.Alpha1)) {
                cardSys.CreateCard("wood", "Wood", CardType.Resource, true);
            }
            if (Input.GetKeyDown(KeyCode.Alpha2)) {
                cardSys.CreateCard("stone", "Stone", CardType.Resource, true);
            }            
        }

        if (Input.GetKeyDown(KeyCode.S)){
            cardSys.ShowAllCards();
        }
    }
}
