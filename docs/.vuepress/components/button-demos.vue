<template>
  <div class="button-wrapper">
    <button-demos>默认按钮</button-demos>
    <button-demos icon="settings">默认按钮</button-demos>
    <button-demos icon="settings" icon-position="right">默认按钮</button-demos>
    <button-demos :loading="true">默认按钮</button-demos>
    <button-demos :loading="true" @click="loading = !loading">默认按钮</button-demos>
    <button-demos disabled>默认按钮</button-demos>
    <h2>使用方法</h2>
    <pre>
      <code>
         {{content}}
      </code>
    </pre>
  </div>
</template>

<script>
import Button from '../../../src/button'

import '../../../src/svg.js'

export default {
  name: "Gugu-button-demos",
  components: {
    'button-demos': Button,
  },
  data(){
    return {
      content:`
    <button-demos>默认按钮</button-demos>
    <button-demos icon="settings">默认按钮</button-demos>
    <button-demos icon="settings" icon-position="right">默认按钮</button-demos>
    <button-demos :loading="true">默认按钮</button-demos>
    <button-demos :loading="true" @click="loading = !loading">默认按钮</button-demos>
    <button-demos disabled>默认按钮</button-demos>
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
