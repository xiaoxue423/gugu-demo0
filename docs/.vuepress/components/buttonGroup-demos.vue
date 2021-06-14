<template>
  <div class="button-wrapper">
    <buttonGroup-demos>
      <button-demos icon="left">上一页</button-demos>
      <button-demos>更多</button-demos>
      <button-demos icon="right" icon-position="right">下一页</button-demos>
    </buttonGroup-demos>
  </div>
</template>

<script>
import ButtonGroup from '../../../src/button-group'
import Button from '../../../src/button'

import '../../../src/svg.js'

export default {
  name: "Gugu-button-demos",
  components: {
    'buttonGroup-demos': ButtonGroup,
    'button-demos': Button,
  },
  data(){
    return {
      content:`
        <buttonGroup-demos>
          <button-demos icon="left">上一页</button-demos>
          <button-demos>更多</button-demos>
          <button-demos icon="right" icon-position="right">下一页</button-demos>
        </buttonGroup-demos>
      `
    }
  }
}
</script>

<style scoped>
.button-wrapper {
  padding: 20px 0;
}
</style>

