<template>
  <div class="button-wrapper">
    <input-demos></input-demos>
    <input-demos value="张三"></input-demos><br/>
    禁用：<input-demos value="禁用" :disabled="true"></input-demos><br/>
    只读：<input-demos value="只读" readonly></input-demos><br/>
    用户名：<input-demos error="用户名已被占用"></input-demos><br/>
    密码：<input-demos value="*****" error="密码太短"></input-demos>
    <hr/>
    <div class="vModel">
      <input-demos v-model="message"></input-demos>
      <div>
        <button @click="message += 1">message + '1'</button>&nbsp;&nbsp;
        <span> value：{{message}} </span>
      </div>

    </div>
  </div>
</template>

<script>
import Input from '../../../src/input'

export default {
  name: "Guguinput-demos",
  components: {
    'input-demos': Input
  },
  data(){
    return {
      content:`
    <input-demos value="张三" @change="inputChange"></input-demos>
    <input-demos value="李四"></input-demos>
    <input-demos value="王五" :disabled="true"></input-demos>
    <input-demos value="小明" readonly></input-demos>
    <input-demos error="姓名不能少于两个字"></input-demos>
      `,
      message:'双向绑定'
    }
  }
}
</script>

<style scoped>
.button-wrapper {
  padding: 20px 0;
}
.vModel{
  margin: 20px 0 0 0;
}
</style>
