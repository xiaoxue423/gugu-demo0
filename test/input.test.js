import Button from "../src/button";

const expect = chai.expect;
import Vue from 'vue'
import Input from '../src/input'

Vue.config.productionTip = false
Vue.config.devtools = false

describe('Input', () => {
    //BDD 行为驱动测试

    it('存在.', () => {
        expect(Input).to.be.exist
    })

    describe('props', () => {
        it('接受value', () => {
            const Constructor = Vue.extend(Input)
            const vm = new Constructor({
                propsData: {
                    value: '1234'
                }
            }).$mount()
            const inputElement = vm.$el.querySelector('input')
            expect(inputElement.value).to.equal('1234')
            vm.$destroy()
        })

        it('接收disabled', () => {
            const Constructor = Vue.extend(Input)
            const vm = new Constructor({
                propsData: {
                    disabled: true
                }
            }).$mount()
            const inputElement = vm.$el.querySelector('input')
            console.log(inputElement.outerHTML)
            expect(inputElement.disabled).to.equal(true)
            vm.$destroy()
        })

        it('接收readonly', () => {
            const Constructor = Vue.extend(Input)
            const vm = new Constructor({
                propsData: {
                    readonly: true
                }
            }).$mount()
            const inputElement = vm.$el.querySelector('input')
            console.log(inputElement.outerHTML)
            expect(inputElement.readOnly).to.equal(true)
            vm.$destroy()
        })

        it('接收error', () => {
            const Constructor = Vue.extend(Input)
            const vm = new Constructor({
                propsData: {error: '你错了'}
            }).$mount()
            const useElement = vm.$el.querySelector('use')
            expect(useElement.getAttribute('xlink:href')).to.equal('#i-error')
            const errorMessage = vm.$el.querySelector('.errorMessage')
            expect(errorMessage.innerText).to.equal('你错了')
            vm.$destroy()
        })
    })

    describe('事件', () => {
        const Constructor = Vue.extend(Input)
        let vm
        afterEach(() => {
            vm.$destroy()
        })
        it('支持 change/input/focus/blur 事件', () => {
            ['change', 'input', 'focus', 'blur'].forEach((eventName) => {
                vm = new Constructor({}).$mount()
                const callback = sinon.fake()  //先搞一个假的回调
                vm.$on(eventName, callback)
                //触发input的change事件
                let event = new Event(eventName)
                console.log(event)
                let inputElement = vm.$el.querySelector('input')
                inputElement.dispatchEvent(event)
                console.log(eventName)
                expect(callback).to.have.been.calledWith(event)
            })
        })

        // it('支持 input 事件', () => {
        //     vm = new Constructor({
        //         propsData: {
        //             value: '1234'
        //         }
        //     }).$mount()
        //     const callback = sinon.fake()  //先搞一个假的回调
        //     vm.$on('input',callback)
        //     //触发input的change事件
        //     let event = new Event('input')
        //     console.log(event)
        //     let inputElement = vm.$el.querySelector('input')
        //     inputElement.dispatchEvent(event)
        //     expect(callback).to.have.been.calledWith(event)
        // })

        // it('支持 focus 事件', () => {
        //     vm = new Constructor({
        //         propsData: {
        //             value: '1234'
        //         }
        //     }).$mount()
        //     const callback = sinon.fake()  //先搞一个假的回调
        //     vm.$on('focus',callback)
        //     //触发input的change事件
        //     let event = new Event('focus')
        //     console.log(event)
        //     let inputElement = vm.$el.querySelector('input')
        //     inputElement.dispatchEvent(event)
        //     expect(callback).to.have.been.calledWith(event)
        // })

        // it('支持 blur 事件', () => {
        //     vm = new Constructor({
        //         propsData: {
        //             value: '1234'
        //         }
        //     }).$mount()
        //     const callback = sinon.fake()  //先搞一个假的回调
        //     vm.$on('blur',callback)
        //     //触发input的change事件
        //     let event = new Event('blur')
        //     console.log(event)
        //     let inputElement = vm.$el.querySelector('input')
        //     inputElement.dispatchEvent(event)
        //     expect(callback).to.have.been.calledWith(event)
        // })
    })
})
