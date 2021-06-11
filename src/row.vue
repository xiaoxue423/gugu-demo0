<template>
  <div class="row" :style="{marginLeft: -gutter/2 + 'px', marginRight: -gutter/2 + 'px' }">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'GuguRow',
  props: {
    gutter: {
      type: [Number, String]
    }
  },
  created() {
    console.log('row created')
    console.log(this.$children)
    //没有儿子
  },
  mounted() {
    console.log('row mounted')
    console.log(this.$children)
    //有儿子
  },

}
</script>

<style scoped lang="scss">
.row {
  display: flex;
}
</style>
