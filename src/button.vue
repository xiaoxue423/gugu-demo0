<template>
  <button class="g-button" :class="{ [`icon-${iconPosition}`]: true} "
          @click="$emit('click')">

    <g-icon class="icon" v-if="icon && !loading" :name="icon"></g-icon>
    <g-icon class="loading icon" v-if="loading" name="loading"></g-icon>

    <div class="content">
      <slot></slot>
    </div>

  </button>
</template>

<script>
import Icon from './icon.vue'

export default {
  name: "GuguButton",
  components: {
    'g-icon': Icon
  },

  // props: ['icon','iconPosition']
  props: {
    icon: {},
    loading: {
      type: Boolean,
      default: false
    },
    iconPosition: {
      type: String,
      default: 'left',
      validator(value) {
        // if (value !== 'left' && value !== 'right') {
        //   return false
        // } else {
        //   return true
        // }
        return value === 'left' || value === 'right'
      }
    }
  },
}
</script>

<style scoped lang="scss">
$font-size: 14px;
$button-height: 32px;
$button-bg: white;
$button-active-bg: #3CB371;
$border-radius: 4px;
$color: #333;
$border-color: #999;
$border-color-hover: #666;

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

.g-button {
  font-size: $font-size;
  height: $button-height;
  padding: 0 1em;
  border-radius: $border-radius;
  border: 1px solid $border-color;
  background: $button-bg;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  vertical-align: middle;

  &:hover {
    border-color: $border-color-hover;
  }

  &:active {
    background-color: $button-active-bg;
  }

  &:focus {
    outline: none;
  }

  //默认的小图标和文字顺序
  > .icon {
    order: 1;
    margin-right: .3em;
  }

  > .content {
    order: 2;
  }

  &.icon-right {
    > .content {
      order: 1;
    }
    > .icon {
      order: 2;
      margin-left: .3em;
      margin-right: 0;
    }
  }

  //线性
  .loading {
    animation: spin 1s infinite linear;
  }
}

</style>
