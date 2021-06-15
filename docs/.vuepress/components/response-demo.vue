<template>
  <div class="response-wrapper">
    <img src="../public/response.gif" alt="响应式效果">
  </div>
</template>

<script>
import Col from '../../../src/Col'
import Row from '../../../src/Row'

export default {
  components: {
    'col-demos': Col,
    'col-rows': Row
  },
}
</script>

<style lang="scss" scoped>
.response-wrapper { padding-top: 10px; }
</style>
