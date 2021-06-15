---
title: 'Grid - 栅格系统'
---
# 栅格系统

## 预览
&nbsp;
<ClientOnly>
<grid-demos>
</grid-demos>
</ClientOnly>

## 使用方法
```vue
<row-demos class="row">
  <col-demos class="item" span="12">col-12</col-demos>
  <col-demos class="item" span="12">col-12</col-demos>
</row-demos>
```

## 选项
### Row选项
####  1. gutter
通过设置<span style='color:#3eaf7c;background-color:#F8F8F8'> icon </span>属性在 Button 内嵌入一个 Icon。  
通过设置<span style='color:#3eaf7c;background-color:#F8F8F8'> iconPosition </span>属性改变 Icon 在 Button 中的位置，仅支持“左，右”两个位置。
预览
<ClientOnly>
<gutter-demo></gutter-demo>
</ClientOnly>

代码
```vue
  <div class="gutter-wrapper">
    <row-demos class="row" gutter="20">
      <col-demos class="item" span="12">col-12</col-demos>
      <col-demos class="item" span="12">col-12</col-demos>
    </row-demos>

    <row-demos class="row" gutter="10">
      <col-demos class="item" span="12">col-12</col-demos>
      <col-demos class="item" span="12">col-12</col-demos>
    </row-demos>

    <row-demos class="row" gutter="8">
      <col-demos class="item" span="8">col-8</col-demos>
      <col-demos class="item" span="8">col-8</col-demos>
      <col-demos class="item" span="8">col-8</col-demos>
    </row-demos>
  </div>
```

#### 2. align
通过给 Row 设置<span style='color:#3eaf7c;background-color:#F8F8F8'> align </span>属性, 可以定义其子组件在该节点里面的排版方式。  
**预览**  
<ClientOnly>
<align-demo></align-demo>
</ClientOnly>

代码
```vue
<template>
  <div class="gutter-wrapper">
    <row-demos class="row" align="left">
      <col-demos class="item" span="8">col-8</col-demos>
      <col-demos class="item" span="8">col-8</col-demos>
    </row-demos>

    <row-demos class="row" align="center">
      <col-demos class="item" span="8">col-8</col-demos>
      <col-demos class="item" span="8">col-8</col-demos>
    </row-demos>

    <row-demos class="row" align="right">
      <col-demos class="item" span="8">col-8</col-demos>
      <col-demos class="item" span="8">col-8</col-demos>
    </row-demos>
  </div>
</template>

<style scoped lang="scss">
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.gutter-wrapper {
  .row {
    padding: .2em;

    > .item {
      text-align: center;
      color: white;
    }
  }
}
</style>
```
####  2. Col选项
> Col 的选项有 span, offset 以及响应式相关的 ipad, narrowPc, pc, widePc 这些。
#### 1. span
栅格系统中的列是指 1 到 24 的值来表示其跨越的范围。通过设置<span style='color:#3eaf7c;background-color:#F8F8F8'> span </span>属性来实现。
例如：三个等宽的列可以使用`<i-col span="8">列</i-col>` 来创建其中一个，其余两个再复制两份。

#### 2. offset
使用<span style='color:#3eaf7c;background-color:#F8F8F8'> offset </span>属性,可以将列向右侧偏。  
例如，`offset="4"` 将元素向右侧偏移了 4 个列（column）的宽度。 


**预览**
<ClientOnly>
<offset-demo></offset-demo>
</ClientOnly>

**代码**
```vue
<template>
  <div class="gutter-wrapper">
    <row-demos class="row">
      <col-demos class="item" span="8">col-8</col-demos>
      <col-demos class="item" span="8">col-8</col-demos>
      <col-demos class="item" span="4" offset="4">col-8</col-demos>
    </row-demos>

    <row-demos class="row">
      <col-demos class="item" span="8">col-8</col-demos>
      <col-demos class="item" span="5" offset="3">col-8</col-demos>
      <col-demos class="item" span="4" offset="4">col-8</col-demos>
    </row-demos>

    <row-demos class="row">
      <col-demos class="item" span="2" offset="6"> <span>col-2</span> </col-demos>
      <col-demos class="item" span="5" offset="3"> <span>col-5</span> </col-demos>
      <col-demos class="item" span="4" offset="4"> <span>col-4</span> </col-demos>
    </row-demos>
  </div>
</template>
<style scoped lang="scss">
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.gutter-wrapper {
  .row {
    padding: .2em;

    > .item {
      text-align: center;
      color: white;
    }
  }
}
</style>
```

#### 3. 响应式
支持ipad 、narrowPc 、pc 、widePc 四种设备的响应式设置。  
若不给 Col 这四个属性，默认为 手机端响应，span值为24。  
<span style='color:red;'>注意： 若设置这四个属性，则需要对应属性 + offset 的值的和为24，具体看代码。</span>  
预览
<ClientOnly>
<response-demo></response-demo>
</ClientOnly>

代码
```vue
<template>
  <div class="response-wrapper">
    <img src="../public/response.gif" alt="响应式效果">
  </div>
</template>

<script>
import Col from '../../../src/Col'
import Row from '../../../src/Row'

export default {
  components: {
    'col-demos': Col,
    'col-rows': Row
  },
}
</script>

<style lang="scss" scoped>
.response-wrapper { padding-top: 10px; }
</style>
```










