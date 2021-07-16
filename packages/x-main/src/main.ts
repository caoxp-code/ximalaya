import Vue from 'vue'
import App from './App.vue'
import './index.css'
import router from './router'
import store from './store'
import registerStart from './micro'

Vue.config.productionTip = false

// 启动主应用
registerStart({ sandbox: { strictStyleIsolation: true } })

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
