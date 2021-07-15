<template>
  <div class="toast">
    <slot></slot>
  </div>
</template>

<script>
// import Vue from 'vue'
//
// Vue.prototype.$toast = function () {
//   console.log('我是toast')
// }
export default {
  name: "toast"
}
</script>

<style scoped lang="scss">
$font-size: 14px;
$toast-height: 40px;
$toast-bg: rgba(0, 0, 0, 0.75);

.toast {
  display: flex;
  align-items: center;
  font-size: $font-size;
  height: $toast-height;
  background: $toast-bg;
  //border: 1px solid red;
  color: white;
  position: fixed;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  line-height: 1.8; //?????
  border-radius: 4px;
  box-shadow: 0 0 3px 0 rgba(0, 0, 0, 0.50);
  padding: 0 16px;
}
</style>
