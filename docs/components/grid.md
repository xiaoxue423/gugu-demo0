---
title: 'Grid - 栅格系统'
sidebarDepth: 2
---
# 按钮

## 预览

<button-demos></button-demos>

## 单个按钮
### 1、图标
通过设置 icon 属性在 Button 内嵌入一个 小图标。

通过设置 iconPosition 属性改变 icon 在 Button 中的位置，仅支持"left"和"right"两个位置。

### 2、加载中状态
通过设置 loading 属性，可以让按钮处于加载中状态。

### 3、不可用状态
通过设置 disabled 属性，可将按钮设置为不可用状态。

## 使用方法
(```)
<button-demo>默认按钮</button-demo>
<button-demo icon="settings">默认按钮</button-demo>
<button-demo :loading="true">默认按钮</button-demo>
<button-demo disabled>默认按钮</button-demo>
(```)





