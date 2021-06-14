---
title: 'Input - 输入框'
---
# 输入框
## 预览
&nbsp;
<ClientOnly>
<input-demos></input-demos>
</ClientOnly>

## 使用方法
```vue
    <input-demos></input-demos>
    <input-demos value="张三"></input-demos>
    <input-demos value="王五" :disabled="true"></input-demos>
    <input-demos value="小明" readonly></input-demos>
    <input-demos error="姓名不能少于两个字"></input-demos>
    <div>
      <input-demos v-model="message"></input-demos>
      <button @click="message += 1">message + '1'</button>
      <p> value：{{message}} </p>
    </div>
```

## 选项
> Input 组件的选项有： value，disabled, readonly, error。 并且支持数据的双向绑定。
### 1、disabled
表示是否禁用状态，默认为 false，禁用。不可以被 Tab 键选中

### 2. readonly
表示只读状态， 与 disabled 相似。但是 disabled 不可以被 Tab 键选中，
<span style='color:#3eaf7c;background-color:#F8F8F8'>readonly</span> 可以被选中，不能修改。

#### 3. error
给 Input 添加 <span style='color:#3eaf7c;background-color:#F8F8F8'>error</span> 属性，会在该 input 右侧显示一个提示图标与文字，用于提示。

#### 4. v-model
**预览**  
<ClientOnly>
<v-model-demo></v-model-demo>  
</ClientOnly>
在输入框中输入相应文字，与input绑定的变量值也会变化

点击按钮，输入框中会多一个1，与input绑定的变量值也会多一个1


**代码**
```vue
<template>
  <div>
    <i-input v-model="value"></i-input> <br>
    value:{{value}}
  </div>
</template>
<script>
  export default {
    data(){
      return{ value:'双向绑定' }
    }
  }
</script>
```




