<template>
  <div class="g-button-group">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "GuguButtonGroup",
  mounted() {
    console.log('here')
    console.log(this.$children) //3个组件

    for(let node of this.$el.children){
      console.log(node)
      if(node.nodeName.toLowerCase() !== 'button'){
        let name = node.nodeName.toLowerCase()
        if(name !== 'button'){
          console.warn(` g-button-group的子元素应该全是g-button，但是你写的是 ${ name } `)
        }
      }
    }
  }
}
</script>

<style scoped lang="scss">
.g-button-group {
  display: inline-flex;
  vertical-align: middle;
  > .g-button {
    border-radius: 0;

    //不是第一个才往左移
    &:not(:first-child){
      margin-left: -1px;
    }

    &:first-child{
      border-top-left-radius: var(--border-radius);
      border-bottom-left-radius: var(--border-radius);
    }

    &:last-child{
      border-top-right-radius: var(--border-radius);
      border-bottom-right-radius: var(--border-radius);
    }

    &:hover {
      position: relative;
      z-index: 1;
    }

  }
}
</style>
