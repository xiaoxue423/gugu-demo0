<template>
  <div class="vModel">
    <v-model-demo v-model="value"></v-model-demo>
    <div>
      <button @click="value += 1">value + '1'</button>&nbsp;&nbsp;
      <span> value：{{ value }} </span>
    </div>

  </div>
</template>

<script>
import Input from '../../../src/input'

export default {
  name: "Gugumodel-demo",
  components:{
    'v-model-demo': Input,
  },
  data(){
    return {
      value:'双向绑定'
    }
  }

}
</script>

<style scoped>
.vModel {
  border: 1px solid #DCDCDC;
  border-radius: 4px;
  padding: 20px;
  margin: 10px;
}
</style>
