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
      validator(){
          return  ['left','right','center'].includes(value)
      }
    }
  },
  created() {
    console.log('row created')
    console.log(this.$children)
    //没有儿子
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
  mounted() {
    console.log('row mounted')
    console.log(this.$children)
    //有儿子
    this.$children.forEach((vm) => {
      vm.gutter = this.gutter
    })
  },

}
</script>

<style scoped lang="scss">
.row {
  display: flex;
  &.align-left{
    justify-content: flex-start;
  }
  &.align-right{
    justify-content: flex-end;
  }
  &.align-center{
    justify-content: center;
  }
}
</style>
