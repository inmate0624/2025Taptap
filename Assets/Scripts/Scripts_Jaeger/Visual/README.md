# 复古屏幕后处理效果设置指南

## 重要说明

### Render Graph 兼容性
当前的后处理效果使用兼容模式运行，这意味着：
- 在Unity的Project Settings > Graphics > URP中，确保"Render Graph"选项被禁用
- 如果启用Render Graph，效果将不会显示，但不会报错
- 这是Unity URP Render Graph API的复杂性导致的临时解决方案

### 如何启用兼容模式
1. 打开 `Edit > Project Settings > Graphics`
2. 找到URP设置
3. 确保"Render Graph"选项被禁用
4. 这样后处理效果就能正常工作了

## 概述
本系统提供了两种复古屏幕后处理效果：
1. **RetroCRT** - 经典CRT显示器效果
2. **RetroPixelArt** - 像素艺术风格效果

## 设置步骤

### 1. 创建材质
1. 在Project窗口右键 → Create → Material
2. 创建两个材质：
   - `RetroCRTMaterial` - 使用 `Hidden/Custom/RetroCRT` shader
   - `RetroPixelArtMaterial` - 使用 `Hidden/Custom/RetroPixelArt` shader

### 2. 设置Renderer Feature
1. 打开 `Window → Rendering → URP Renderer Feature`
2. 选择你的URP Renderer Asset
3. 点击 `Add Renderer Feature`
4. 选择 `RetroCRT Renderer Feature` 或 `RetroPixelArt Renderer Feature`
5. 将对应的材质拖拽到Material字段

### 3. 创建Volume Profile
1. 在Project窗口右键 → Create → Volume Profile
2. 命名为 `RetroCRTProfile` 或 `RetroPixelArtProfile`
3. 在Volume组件中添加对应的Post Process组件

### 4. 设置Volume
1. 在场景中创建空GameObject
2. 添加 `Volume` 组件
3. 将创建的Profile拖拽到Profile字段
4. 调整参数获得理想效果

## 效果参数说明

### RetroCRT 效果参数

#### 鱼眼效果
- **Fisheye Intensity** (0-1): 鱼眼变形强度
- **Fisheye Radius** (0-1): 鱼眼效果影响半径

#### 扫描线效果
- **Scanline Intensity** (0-1): 扫描线强度
- **Scanline Density** (0-2000): 扫描线密度
- **Scanline Speed** (0-10): 扫描线移动速度

#### 色差效果
- **Chromatic Aberration** (0-0.01): 色差偏移量

#### 噪点效果
- **Noise Intensity** (0-1): 噪点强度
- **Noise Scale** (0-100): 噪点缩放

#### 屏幕弯曲
- **Screen Curvature** (0-0.1): 屏幕边缘弯曲程度

#### 亮度对比度
- **Brightness** (0-2): 整体亮度
- **Contrast** (0-2): 对比度

#### 边缘暗化
- **Vignette Intensity** (0-1): 边缘暗化强度
- **Vignette Radius** (0-1): 暗化区域半径

#### 像素化效果
- **Pixel Size** (1-20): 像素大小

#### 色彩分离
- **Color Separation** (0-0.01): 色彩分离偏移

### RetroPixelArt 效果参数

#### 像素化效果
- **Pixel Size** (1-50): 像素大小
- **Pixel Aspect Ratio** (0.5-2): 像素宽高比

#### 调色板效果
- **Palette Size** (2-64): 调色板颜色数量
- **Dithering** (0-1): 抖动强度

#### 扫描线
- **Scanline Intensity** (0-1): 扫描线强度
- **Scanline Density** (0-1000): 扫描线密度

#### 边缘暗化
- **Vignette Intensity** (0-1): 边缘暗化强度
- **Vignette Radius** (0-1): 暗化区域半径

#### 色彩调整
- **Saturation** (0-2): 色彩饱和度
- **Noise Intensity** (0-1): 噪点强度

## 推荐设置

### 经典CRT显示器风格
```
RetroCRT效果：
- Fisheye Intensity: 0.15
- Scanline Intensity: 0.4
- Scanline Density: 800
- Chromatic Aberration: 0.003
- Noise Intensity: 0.1
- Screen Curvature: 0.03
- Vignette Intensity: 0.3
- Pixel Size: 2
```

### 复古像素艺术风格
```
RetroPixelArt效果：
- Pixel Size: 4
- Pixel Aspect Ratio: 1.2
- Palette Size: 16
- Dithering: 0.3
- Scanline Intensity: 0.2
- Saturation: 1.2
- Vignette Intensity: 0.4
```

## 性能优化建议

1. **分辨率影响**: 像素化效果在高分辨率下性能消耗较大
2. **参数调整**: 避免同时使用过高的噪点和扫描线强度
3. **平台适配**: 在移动平台上适当降低效果强度

## 故障排除

### 效果不显示
1. 检查Renderer Feature是否正确添加
2. 确认材质使用了正确的shader
3. 检查Volume Profile是否正确设置

### 性能问题
1. 降低Pixel Size参数
2. 减少噪点和扫描线强度
3. 考虑在低端设备上禁用某些效果

### 效果过强
1. 逐步调整参数，避免一次性设置过高值
2. 使用Enable Effect开关快速测试
3. 参考推荐设置作为起点
