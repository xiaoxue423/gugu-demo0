<template>
  <div class="col" :class="[`col-${span}`, offset && `offset - ${offset}`]"
       :style="{paddingLeft:gutter/2+'px',paddingRight: gutter/2+'px'}">
    <div style="border: 1px solid green;height: 100px;">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'GuguCol',
  props: {
    span: {
      type: [Number, String]
    },
    // 偏移
    offset: {
      type: [Number, String]
    },
    gutter: {
      type: [Number, String]
    }
  },
  data(){
    return {
      gutter: 0
    }
  },
  created() {
    console.log('col created')
    console.log(this.$children)
    //没有儿子
  },
  mounted() {
    console.log('col mounted')
    console.log(this.$children)
    //有儿子
   this.$children.forEach((vm)=>{
     vm.gutter = this.gutter
   })
  },
}
</script>

<style lang="scss" scoped>
.col {
  height: 100px;
  background: yellow;
  width: 50%;
  border: 1px solid red;
  padding: 0 10px;

  $class-prefix: col-;
  @for $n from 1 through 24 {
    //.col.col-1
    //.col.col-2
    &.# {
      $class-prefix
    }
  # {
    $n
  } {
    width: ($n / 24) * 100%;
  }
  }

  //生成24个offset类
  $class-prefix: offset-;
  @for $n from 1 through 24 {
    //.col.col-1
    //.col.col-2
    &.# {
      $class-prefix
    }
  # {
    $n
  } {
    margin-left: ($n / 24) * 100%;
  }
  }

}
</style>
