<template>
    <button class="g-button" :class="{ [`icon-${iconPosition}`]: true} "
    @click="$emit('click')" >

      <g-icon class="icon" v-if="icon && !loading" :name="icon" ></g-icon>
      <g-icon class="icon loading" v-if="loading" name="loading" ></g-icon>

      <div class="content">
        <slot></slot>
      </div>

    </button>
</template>

<script>
import Vue from 'vue'
import Icon from './icon.vue'

export default {
  components: {
    'g-icon':Icon
  },
  name: "button.vue",
  // props: ['icon','iconPosition']
  props:{
    icon:{},
    loading:{
      type:Boolean,
      default:false
    },
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
  },
}
</script>

<style scoped lang="scss">
@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100%{
    transform: rotate(360deg);
  }
}

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

  //线性
  .loading{
    animation: spin 1s infinite linear;
  }
}


</style>
