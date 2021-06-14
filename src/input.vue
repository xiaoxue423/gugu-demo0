<template>
  <div class="wrapper" :class=" { 'error': error} ">
    <input :value="value" type="text" :disabled="disabled" :readonly="readonly"
           @change="$emit('change',$event.target.value)"
           @input="$emit('input',$event.target.value)"
           @focus="$emit('focus',$event.target.value)"
           @blur="$emit('blur',$event.target.value)">

    <div class="error-wrapper">
      <template v-if="error">
        <Icon name="error" class="icon-error"></Icon>
        <span class="errorMessage">{{ error }}</span>
      </template>
    </div>


  </div>
</template>

<script>
import Icon from './icon'

export default {
  name: "Gugu-Input",
  components: {
    Icon
  },
  props: {
    value: {
      type: String
    },
    disabled: {
      type: Boolean,
      default: false
    },
    readonly: {
      type: Boolean,
      default: false
    },
    error: {
      type: String
    }
  }
}
</script>

<style scoped lang="scss">
$height: 32px;
$border-color: #999;
$border-color-hover: #00BFFF;
$border-radius: 4px;
$font-size: 12px;
$red: #F1453D;
$box-shadow-color: rgba(0, 0, 0, 0.5); //边框阴影
.wrapper {
  font-size: $font-size;
  display: inline-flex;
  align-items: center;

  > * {
    margin-right: .5em;

    &:last-child {
      margin-right: 0;
    }
  }

  &.error {
    > input {
      border-color: $red;
    }
  }

  > input {
    height: 32px;
    border: 1px solid $border-color;
    border-radius: $border-radius;
    padding: 0 8px;
    font-size: inherit;//字体大小  是 继承

    &:hover {
      border-color: $border-color-hover;
    }

    &:focus {
      box-shadow: inset  1px 1px 3px $box-shadow-color;
      outline: none;
    }

    &[disabled], &[readonly] {
      border-color: #ccc;
      color: #ccc;
      cursor: not-allowed;
    }
  }

  .icon-error {
    fill: $red;
  }

  .errorMessage {
    color: red;
  }

  .error-wrapper {
    margin: 20px;
  }
}
</style>
