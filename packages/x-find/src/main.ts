import './public-path'
import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import routes from './router'
import store from './store'
import 'bootstrap/dist/css/bootstrap.min.css'

Vue.config.productionTip = false
let vue = null
let router = null
const render = (props = {}) => {
  const { container } = props
  router = new VueRouter({
    routes,
    base: window.__POWERED_BY_QIANKUN__ ? '/findPage/' : '/',
    mode: 'history'
  })
  vue = new Vue({
    router,
    store,
    render: h => h(App)
  }).$mount(container ? container.querySelector('#app') : '#app')
}

// 单独运行
if (!window.__POWERED_BY_QIANKUN__) {
  render()
}

export async function bootstrap (): Promise<void> {
  console.log('bootstrap')
}
export async function mount (props: unknown): Promise<void> {
  render(props)
}
export async function unmount (): Promise<void> {
  vue.$distroy()
  vue.$el.innerHTML = ''
  vue = null
  router = null
}
