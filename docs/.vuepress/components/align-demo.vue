<template>
  <div class="gutter-wrapper">
    <row-demos class="row" align="left">
      <col-demos class="item" span="8">col-8</col-demos>
      <col-demos class="item" span="8">col-8</col-demos>
    </row-demos>

    <row-demos class="row" align="center">
      <col-demos class="item" span="8">col-8</col-demos>
      <col-demos class="item" span="8">col-8</col-demos>
    </row-demos>

    <row-demos class="row" align="right">
      <col-demos class="item" span="8">col-8</col-demos>
      <col-demos class="item" span="8">col-8</col-demos>
    </row-demos>
  </div>
</template>

<script>
import Row from '../../../src/row'
import Col from '../../../src/col'

export default {
  name: "Gugu-gutter-demo",
  components: {
    'row-demos': Row,
    'col-demos': Col
  }
}
</script>

<style scoped lang="scss">
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.gutter-wrapper {
  .row {
    padding: .2em;

    > .item {
      text-align: center;
      color: white;
    }
  }
}
</style>

