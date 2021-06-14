<template>
  <div class="col" :class="colClass" :style="colStyle">
    <div style="border: 1px solid green;height: 100px;">
      <slot></slot>
    </div>
  </div>
</template>

<script>
let validator = (value) => {
    let keys = Object.keys(value)
    let valid = true
    keys.forEach(key => { //两层循环
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
    span: {
      type: [Number, String]
    },
    // 偏移
    offset: {
      type: [Number, String]
    },
    gutter: {
      type: [Number, String]
    },
    phone: {
      type: Object,
    },
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
    createClasses(obj,str = ''){
      if(!obj) {return []}
      let array  =  []
      if(obj.span){ array.push(` col-${str} ${obj.span} `) }
      if(obj.offset){ array.push(` offset-${str}${obj.offset} `) }
      return array
    }
  },
  computed: {
    colClass() {
      let {span, offset, phone,ipad,narrowPc,pc,widePc} = this

      // let phoneClass = []
      // if (phone) {
      //   phoneClass = [`col-phone-${phone.span}`]
      // }
      let createClasses = this.createClasses()
      // let createClasses = (obj,str='') => {
      //   if(!obj) { return [] }
      //   //ipad-
      //   //pc-
      //     let array  =  []
      //     if(obj.span){
      //       array.push(` col-${str}${obj.span} `)
      //     }
      //     if(obj.offset){
      //       array.push(` offset-${str}${obj.offset} `)
      //     }
      //     return array
      // }

      return [
          ...createClasses({ span,offset }),
          ...createClasses(ipad,'ipad-'),
          ...createClasses(narrowPc,'narrow-pc-'),
          ...createClasses(pc,'pc-'),
          ...createClasses(widePc,'wide-pc-'),
        // offset && `offset - ${ offset }`,
        // ...(phone && [`col-phone - ${ phone.span }`] ),
        // ...(ipad && [`col-ipad-${ ipad.span }`] ),
        // ...(narrowPc && [`col-narrow-pc-${ narrowPc.span }`] ),
        // ...(widePc && [`col-wide-pc-${ widePc.span }`] )
      ]
    },
    colStyle() {
      return {
        paddingLeft: this.gutter / 2 + 'px',
        paddingRight: this.gutter / 2 + 'px',
      }
    }
  },
  created() {
    console.log('col created')
    console.log(this.$children)
    //没有儿子
  },
  mounted() {
    console.log('col mounted')
    console.log(this.$children)
    //有儿子
    this.$children.forEach((vm) => {
      vm.gutter = this.gutter
    })
  },
}
</script>

<style lang="scss" scoped>
.col {
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
  @media (min-width: 577px) {
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
  @media (min-width: 769px){ // 770
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
  @media (min-width: 993px) {
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
  @media (min-width: 1201px) {
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
