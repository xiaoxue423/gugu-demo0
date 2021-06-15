<template>
  <div class="row" :style="rowStyle" :class="rowClass">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'GuguRow',
  props: {
    gutter: {
      type: [Number, String]
    },
    align:{
      type:String,
      validator(value){
          return  ['left','right','center'].includes(value)
      }
    }
  },
  mounted() {
    this.$children.forEach((vm) => {
      vm.gutter = this.gutter
    })
    // this.$children.forEach(function (vm){
    //   vm.gutter = this.gutter
    // }.bind(this))
  },
  computed: {
    rowStyle() {
      let {gutter} = this
      return {marginLeft: -gutter / 2 + 'px', marginRight: -gutter / 2 + 'px'}
    },
    rowClass(){
      let {align} = this
      return [align && `align-${align}`]
    }
  },
}
</script>

<style scoped lang="scss">
.row {
  display: flex;
  flex-wrap: wrap;
  &.align-left{
    //水平靠左
    justify-content: flex-start;
  }
  &.align-right{
    //水平靠右
    justify-content: flex-end;
  }
  &.align-center{
    justify-content: center;
  }
}
</style>
