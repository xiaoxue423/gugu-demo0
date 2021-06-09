import Vue from 'vue'
import Button from './button'
import Icon from './icon'
import ButtonGroup from './button-group'

Vue.component('g-button', Button)
Vue.component('g-icon', Icon)
Vue.component('g-button-group', ButtonGroup)

new Vue({
    el:'#app',
    data:{
        loading1:true,
        loading2:true,
        loading3:false
    }
})

import chai from 'chai'

const expect = chai.expect
//单元测试
{
    console.log(Button)  //Button是一个对象  把Button组件变成构造函数
    const Constructor = Vue.extend(Button)
    const vm = new Constructor({
        propsData:{
            icon:'settings'
        }
    })
    vm.$mount('#test')
    let useElement = vm.$el.querySelector('use')
    // console.log(useElement)
    let href = useElement.getAttribute(' xlink:href' )
    expect(href).to.eq('#i-settings')
    vm.$el.remove()
    vm.$destroy()
}

{
    const Constructor = Vue.extend(Button)
    const button = new Constructor({
        propsData:{
            icon:'settings',
            loading: true
        }
    })
    button.$mount('#test')
    let useElement = button.$el.querySelector('use')
    // console.log(useElement)
    let href = useElement.getAttribute(' xlink:href' )
    expect(href).to.eq('#i-loading')
    button.$el.remove()
    button.$destroy()

}

{
    const div = document.createElement('div')
    document.body.appendChild(div)
    const Constructor = Vue.extend(Button)

    const button = new Constructor({
        propsData:{
            icon:'settings',
        }
    })
    button.$mount(div)
    let svg = button.$el.querySelector('svg')
    // console.log(useElement)
    let {order} = window.getComputedStyle(svg)
    expect(order).to.eq(1)
    button.$el.remove()
    button.$destroy()
}

{
    const div = document.createElement('div')
    document.body.appendChild(div)
    const Constructor = Vue.extend(Button)
    const button = new Constructor({
        propsData:{
            icon:'settings',
            iconPosition:'right'
        }
    })
    button.$mount(div)
    let svg = button.$el.querySelector('svg')
    // console.log(useElement)
    let {order} = window.getComputedStyle(svg)
    expect(order).to.eq(2)
    //断言完了之后   清除战场
    button.$el.remove()
    button.$destroy()
}

{
    //mock
    const Constructor = Vue.extend(Button)
    const gButton = new Constructor({
        propsData:{
            icon:'settings',
        }
    })
    gButton.$mount()
    gButton.$on('click',function (){
        expect(1).to.eq(1)
    })
    console.log(gButton.$el)  //本身就是一个button

    //希望这个函数被执行
    let button = gButton.$el
    button.click()

    button.$el.remove()
    button.$destroy()
}
