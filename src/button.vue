<template>
  <div>
    <button class="g-button" :class="{[`icon-${iconPosition}`]:true}">
      <g-icon v-if="icon" :name="icon" class="icon"></g-icon>

      <div class="content">
        <slot></slot>
      </div>
    </button>
  </div>

</template>

<script>
export default {
  name: "button.vue",
  // props: ['icon','iconPosition']
  props:{
    icon:{},
    iconPosition:{
      type: String,
      default:'left',
      validator(value){
        console.log(value)
        if(value !== 'left' && value !== 'right'){
          return false
        }else{
          return true
        }
      }
    }
  }
}
</script>

<style scoped lang="scss">
.icon {
  width: 1em;
  height: 1em;
}
.g-button {
  font-size: var(--font-size);
  height: var(--button--height);
  padding: 0 1em;
  border-radius: var(--border-radius);
  border: 1px solid var(--border-color);
  background: var(--button-bg);
  display: inline-flex;
  justify-content: center;
  align-items: center;
  vertical-align: middle;

  > .icon{
    order: 1;
    margin-right: .3em;
  }

  >.content{
    order: 2;
  }

  &:hover {
    border-color: var(--border-color-hover);
  }

  &:active {
    background-color: var(--button-active-bg);
  }
  &:focus {
    outline: none;
  }
  &.icon-right{
    > .icon {
      margin-left: .3em;
      order:2;
      margin-right: 0;
    }

    >.content {
      order: 1;
    }
  }
}


</style>
