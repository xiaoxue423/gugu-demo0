import Vue from 'vue'
import Button from './button'
import Icon from './icon'
import ButtonGroup from './button-group'

Vue.component('g-button', Button)
Vue.component('g-icon', Icon)
Vue.component('g-button-group', ButtonGroup)

new Vue({
    el: '#app',
    data: {
        loading1: true,
        loading2: true,
        loading3: false
    }
})

//单元测试
import chai from 'chai'
import spies from 'chai-spies'

chai.use(spies)

const expect = chai.expect

try {
    //单元测试 作用域隔离和断言
    {
        console.log(Button)  //Button是一个对象  把Button组件变成构造函数
        const Constructor = Vue.extend(Button)
        const vm = new Constructor({
            propsData: {
                icon: 'settings'
            }
        })
        vm.$mount('#test')
        let useElement = vm.$el.querySelector('use')
        // console.log(useElement)
        let href = useElement.getAttribute(' xlink:href')
        expect(href).to.eq('#i-settings')
        vm.$el.remove()
        vm.$destroy()
    }
    {
        const Constructor = Vue.extend(Button)
        const button = new Constructor({
            propsData: {
                icon: 'settings',
                loading: true
            }
        })
        button.$mount('#test')
        let useElement = button.$el.querySelector('use')
        // console.log(useElement)
        let href = useElement.getAttribute(' xlink:href')
        expect(href).to.eq('#i-loading')
        button.$el.remove()
        button.$destroy()
    }
    {
        const div = document.createElement('div')
        document.body.appendChild(div)
        const Constructor = Vue.extend(Button)

        const button = new Constructor({
            propsData: {
                icon: 'settings',
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
            propsData: {
                icon: 'settings',
                iconPosition: 'right'
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
        //mock  函数的mock
        const Constructor = Vue.extend(Button)
        const vm = new Constructor({
            propsData: {
                icon: 'settings',
            }
        })
        vm.$mount()
        let spy = chai.spy(function () {
        })

        vm.$on('click', spy)
        let button = vm.$el
        button.click()
        expect(spy).to.have.been.called()  //期待我们得间谍已经被调用了
    }
} catch (error) {
    window.errors = [error]
    console.log('error')
} finally {
    console.log(window.errors)
    window.errors && window.errors.forEach((error) => {
        console.error(error.message)
    })
}











