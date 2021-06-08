<template>
  <div>
    <svg class="g-icon">
      <use :xlink:href=`#i-${name}`></use>
    </svg>
  </div>
</template>

<script>
export default {
  name: "icon",
  props: ['name']
}
</script>

<style scoped lang="scss">
.g-icon {
  width: 1em;
  height: 1em;
}
</style>
