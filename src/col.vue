<template>
  <div class="col" :class="[` col- ${span} `]">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'GuguCol',
  props: {
    span: [Number,String]
  }
}
</script>

<style lang="scss" scoped>
.col {
  height: 100px;
  background: yellow;
  width: 50%;
  border: 1px solid red;

  $class-prefix: col-;
  @for $n from 1 through 24 {
    //.col.col-1
    //.col.col-2
    &.# {
      $class-prefix
    }
    .# {
      $n
    }
  {
    width: ($n / 24) * 100%;
  }
  }
}
</style>
