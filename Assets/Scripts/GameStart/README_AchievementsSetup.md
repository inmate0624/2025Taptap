# 成就面板设置指南

本指南带你在主界面添加“成就”页面：包含总体进度条、左侧成就列表、右侧详情展示，以及关闭按钮。

## 1. 创建 UI 结构

### 1.1 在 Canvas 下创建根面板
1. 在 Hierarchy 中选择主界面 Canvas
2. 右键 > Create Empty，命名 AchievementsPanel
3. 在 Inspector 取消勾选 Active（默认隐藏）

### 1.2 背景与关闭按钮
1. 在 AchievementsPanel 下创建 UI > Image，命名 PanelBackground
2. 将其 RectTransform 设为 Stretch 全屏，颜色半透明黑（如 RGBA 0,0,0,200）
3. 在 AchievementsPanel 下创建 UI > Button，命名 CloseButton，放右上角

### 1.3 顶部总体进度
1. 在 AchievementsPanel 下创建 UI > Slider，命名 ProgressSlider（宽约 800，高约 30）
2. 在 AchievementsPanel 下创建 UI > Text，命名 ProgressText，放在进度条附近显示“已获得 x/总数 (xx%)”

### 1.4 列表与详情布局
1. 在 AchievementsPanel 下创建 Create Empty，命名 Content
2. 在 Content 下创建 Create Empty，命名 ItemsContainer（左侧区域）
3. 在 ItemsContainer 添加 GridLayoutGroup（Cell 160x160，Spacing 16x16）或 VerticalLayoutGroup
4. 在 Content 下创建 Create Empty，命名 DetailPanel（右侧区域）
5. 在 DetailPanel 下创建 UI > Text，命名 DetailTitleText
6. 在 DetailPanel 下创建 UI > Text，命名 DetailDescText（多行）

布局建议：Content 使用 HorizontalLayoutGroup 或锚点分栏：左 40%-50% 列表，右侧详情。

### 1.5 列表条目预制体
1. 在 Project 中创建 Prefabs（若不存在）
2. 在 Hierarchy 创建 UI > Button，命名 AchievementItem
3. 设置大小 160x160，内部放一个居中 Text 作为标题
4. 将 AchievementItem 拖入 Prefabs，命名 AchievementItemPrefab

## 2. 添加脚本并绑定

### 2.1 将脚本挂载
1. 定位 Assets/Scripts/GameStart/AchievementsPanel.cs
2. 将其拖到 Hierarchy 新建空对象，命名 AchievementsPanelController

### 2.2 绑定引用
选中 AchievementsPanelController，在脚本组件填入：
- achievementsPanel：拖 AchievementsPanel
- closeButton：拖 CloseButton
- progressSlider：拖 ProgressSlider
- progressText：拖 ProgressText
- itemsContainer：拖 ItemsContainer
- itemPrefab：拖 AchievementItemPrefab
- detailTitleText：拖 DetailTitleText
- detailDescText：拖 DetailDescText

### 2.3 为条目添加视图组件
1. 打开 AchievementItemPrefab
2. 确保根上有 Button 和 Image
3. 在根上添加 AchievementItemView 组件（Assets/Scripts/GameStart/AchievementItemView.cs）
4. 若预制体内有 Text，可关联到 titleText 字段；否则运行时会自动创建

## 3. 主菜单按钮联动

### 3.1 通过 Inspector 直接绑定（推荐）
1. 在 Hierarchy 中找到你的主菜单场景中的“成就”按钮 GameObject（常见路径示例：`MainMenu/ButtonsContainer/成就`）。
2. 选中该按钮，在 Inspector 的 `Button (Script)` 组件里找到 `On Click ()` 列表。
3. 点击 `+` 新增一条事件。
4. 将 `AchievementsPanelController`（挂有 `AchievementsPanel` 脚本的对象）拖到新事件的对象槽位中。
5. 在右侧函数下拉中依次选择：`AchievementsPanel` → `Show()`。
6. 进入 Play，点击“成就”按钮应可打开成就面板。

提示：如果下拉里没有 `AchievementsPanel.Show`，请确认 `AchievementsPanel` 脚本组件确实挂在 `AchievementsPanelController` 对象上，且无编译错误。

### 3.2 通过控制脚本触发（可选）
如果你使用了 `MainMenuController` 这类统一控制脚本，也可以在脚本中显式调用：

```csharp
using UnityEngine;

public class MainMenuController : MonoBehaviour
{
    public AchievementsPanel achievementsPanel; // 在 Inspector 里拖拽 AchievementsPanelController

    public void OnClickAchievements()
    {
        if (achievementsPanel != null)
        {
            achievementsPanel.Show();
        }
    }
}
```

然后到“成就”按钮的 `On Click ()` 中：
1. 点击 `+` 新增事件。
2. 将 `MainMenuController` 所在对象拖入对象槽位。
3. 下拉选择 `MainMenuController` → `OnClickAchievements()`。

### 3.3 关闭按钮
`AchievementsPanel` 脚本已在 `Start()` 中为 `closeButton` 自动绑定 `Hide()`。如果希望手动绑定或替换：
1. 选中 `CloseButton`。
2. 在 `On Click ()` 中添加事件，将 `AchievementsPanelController` 拖入。
3. 选择 `AchievementsPanel` → `Hide()`。

## 4. 配置与测试

### 4.1 填充示例数据
1. 选中 AchievementsPanelController
2. 在“数据”列表中设置 Size，例如 4
3. 为每项填写：id、title、description、unlocked

### 4.2 运行测试
1. 进入 Play
2. 点击主界面“成就”按钮
3. 预期：
   - 顶部显示总体进度，百分比与条同步
   - 左侧生成条目（标题用填写的 title）
   - 点击左侧某项，右侧显示标题与描述，并高亮选中项
   - 关闭按钮可关闭面板

## 5. 常见问题
- 看不到条目：检查 itemPrefab、itemsContainer 是否绑定、条目是否有 Button，Canvas 遮挡
- 进度不刷新：确认 unlocked 字段，或是否调用 SetAchievements
- 中文显示：确保 Text 字体正确或改用 TMP

## 6. 扩展建议
- 用 ScriptableObject/存档/服务端替换内置 List
- 条目支持缩略图、完成时间、奖励
- 右侧详情加滚动视图
- 过滤/排序（已解锁优先、按类别等）

---
完成以上步骤，即可在“成就”按钮进入后展示成就页面。
