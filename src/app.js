import './svg'
import Vue from 'vue'
import Button from './button'
import Icon from './icon'
import ButtonGroup from './button-group'
import Input from './input'
import Row from './row'
import Col from './col'
import Layout from './layout'
import Header from './header'
import Sider from './sider'
import Footer from './footer'
import Content from './content'
import Toast from './toast'
import plugin from './plugin'

Vue.component('g-button', Button)
Vue.component('g-icon', Icon)
Vue.component('g-button-group', ButtonGroup)
Vue.component('g-input', Input)
Vue.component('g-row', Row)
Vue.component('g-layout', Layout)
Vue.component('g-sider', Sider)
Vue.component('g-footer', Footer)
Vue.component('g-content', Content)
Vue.component('g-header', Header)
Vue.component('g-toast', Toast)
Vue.use(plugin)

new Vue({
    el: '#app',
    data: {
        loading1: true,
        loading2: true,
        loading3: false,
        message: 'hi 雪儿'
    },
    created() {
        setTimeout(() => {
            let event = new Event('change')
            console.log(event)
            let inputElement = this.$el.querySelector('input')
            inputElement.dispatchEvent(event)
            console.log('hi')
        }, 3000)
    },
    methods: {
        inputChange(e) {
            console.log(e.target.value)
        },
        showToast(){
            this.$toast('我是message')
        }
    },
})









