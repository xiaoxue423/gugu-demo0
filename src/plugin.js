import Toast from './toast'

export default {
    install(Vue,options){
        Vue.prototype.$toast = function(message){
            console.log('I am toast')
            // alert(message)
            // let div = document.createElement('div')
            // div.textContent = message
            // document.body.appendChild(div)
            let Constructor = Vue.extend(Toast)
            let toast = new Constructor()
            toast.$slots.default = [message]
            toast.$mount()
            //生成一个toast组件，放到body里面
            document.body.appendChild(toast.$el)  //mount之后，把元素放到桌子里面

        }
    }
}
