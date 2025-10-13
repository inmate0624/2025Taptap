
using System.Collections.Generic;
using System.Linq;

/// <summary>
/// 合成过程实例，合成请求
/// </summary>
public class RecipeProcess{
    public readonly Stack stack;
    public readonly Recipe recipe;
    // 进程结束时，需要销毁的卡牌ID（有的配方中不是所有卡牌都需要销毁）
    public float targetTime;
    public float elapsedTime;
    public bool isRunning;

    public RecipeProcess(Stack stack, Recipe recipe){
        this.stack = stack;
        this.recipe = recipe;
        this.targetTime = recipe.WorkTime;
        this.elapsedTime = 0;
        this.isRunning = true;
    }
}



