<template>
  <div class="col" :class="colClass" :style="colStyle">
      <slot></slot>
  </div>
</template>

<script>
let validator = (value) => {
    let keys = Object.keys(value)
    let valid = false //合法
    keys.forEach(key => { //两层循环 遍历
      if (!['span', 'offset'].includes(key)) {
        valid = false
      }
    })
    return valid
    // [1,2,3]  [1,2]   [1,3]    [1,2,3]  [1]
}

export default {
  name: 'GuguCol',
  props: {
    // span:Number  //跨度
    span: {
      type: [Number, String]
    },
    offset: { // 做空格 偏移
      type: [Number, String]
    },
    phone: { type: Object,validator},
    ipad: { type: Object, validator},
    narrowPc: { type: Object, validator,},
    pc: { type: Object, validator },
    widePc: { type: Object, validator},
  },
  data() {
    return {
      gutter: 0,
    }
  },
  methods:{
    // span && `col-${span}`
    // offset && `offset - ${ offset }`,
    // ...(phone && [`col-phone - ${ phone.span }`] ),
    // ...(ipad && [`col-ipad-${ ipad.span }`] ),
    // ...(narrowPc && [`col-narrow-pc-${ narrowPc.span }`] ),
    // ...(narrowPc && [`col-pc-${ pc.span }`] ),
    // ...(widePc && [`col-wide-pc-${ widePc.span }`] )
    createClasses(obj,str = ''){
      //ipad-  pc-   narrow
      if(!obj) {return []}
      let array  =  []
      if(obj.span){ array.push(`col-${str}${obj.span}`) }
      if(obj.offset){ array.push(`offset-${str}${obj.offset}`) }
      return array
    }
  },
  computed: {
    colStyle() {
      return {
        paddingLeft: this.gutter / 2 + 'px',
        paddingRight: this.gutter / 2 + 'px',
      }
    },
    colClass() {
      let {span, offset,ipad,narrowPc,pc,widePc} = this
      let createClasses = this.createClasses
      return [
          ...createClasses({span,offset}),
          ...createClasses(ipad,'ipad-'),
          ...createClasses(narrowPc,'narrow-pc-'),
          ...createClasses(pc,'pc-'),
          ...createClasses(widePc,'wide-pc-'),

        // span && `col-${span}`
        // offset && `offset - ${ offset }`,
        // ...(phone && [`col-phone - ${ phone.span }`] ),
        // ...(ipad && [`col-ipad-${ ipad.span }`] ),
        // ...(narrowPc && [`col-narrow-pc-${ narrowPc.span }`] ),
        // ...(narrowPc && [`col-pc-${ pc.span }`] ),
        // ...(widePc && [`col-wide-pc-${ widePc.span }`] )
      ]
    },
  },
}
</script>

<style lang="scss" scoped>
.col {
  //默认是手机
  $class-prefix: col-;
  @for $n from 1 through 24 {
    &.#{$class-prefix}#{$n} {
      width: ($n / 24) * 100%;
    }
  }

  $class-prefix: offset-;
  @for $n from 1 through 24 {
    &.#{$class-prefix}#{$n} {
      margin-left: ($n / 24) * 100%;
    }
  }

  //ipad
  @media (min-width: 577px){
    $class-prefix: col-ipad-;
    @for $n from 1 through 24 {
      &.#{$class-prefix}#{$n} {
        width: ($n / 24) * 100%;
      }
    }
    $class-prefix: offset-ipad-;
    @for $n from 1 through 24 {
      &.#{$class-prefix}#{$n} {
        margin-left: ($n / 24) * 100%;
      }
    }
  }

  //narrow-pc
  @media (min-width: 768px){
    $class-prefix: col-narrow-pc-;
    @for $n from 1 through 24 {
      &.#{$class-prefix}#{$n} {
        width: ($n / 24) * 100%;
      }
    }

    $class-prefix: offset-narrow-pc-;
    @for $n from 1 through 24 {
      &.#{$class-prefix}#{$n} {
        margin-left: ($n / 24) * 100%;
      }
    }
  }

  //pc
  @media (min-width: 992px){
    $class-prefix: col-pc-;
    @for $n from 1 through 24 {
      &.#{$class-prefix}#{$n} {
        width: ($n / 24) * 100%;
      }
    }
    $class-prefix: offset-pc-;
    @for $n from 1 through 24 {
      &.#{$class-prefix}#{$n} {
        margin-left: ($n / 24) * 100%;
      }
    }
  }

  //wide-pc
  @media (min-width: 1200px) {
    $class-prefix: col-wide-pc-;
    @for $n from 1 through 24 {
      &.#{$class-prefix}#{$n} {
        width: ($n / 24) * 100%;
      }
    }
    $class-prefix: offset-wide-pc-;
    @for $n from 1 through 24 {
      &.#{$class-prefix}#{$n} {
        margin-left: ($n / 24) * 100%;
      }
    }
  }
}

</style>
