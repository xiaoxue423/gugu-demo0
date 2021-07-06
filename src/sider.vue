<template>
<!--  name就是动画的名字-->
  <transition name="slide">
    <div class="sider" v-if="visible">
      <slot></slot>
      <button @click="visible = false">close</button>
    </div>
  </transition>
</template>

<script>
export default {
  name: "GuguSider",
  data(){
    return {
      visible:true
    }
  },
  methods:{
  }
}
</script>

<style scoped lang="scss">
.sider {
  position: relative;

  > button {
    position: absolute;
    top: 0;
    right: 0;
  }
}
.slide-enter-active, .silde-leave-active {
  transition: all .5s;
}
.slide-enter, .slide-leave-to{
  margin-left: -200px;
}
</style>
