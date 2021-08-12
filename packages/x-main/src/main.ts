import Vue from 'vue'
import App from './App.vue'
import './index.css'
import router from './router'
import store from './store'
import registerStart, { actions } from './micro'

Vue.config.productionTip = false

// 启动主应用
registerStart({ sandbox: { strictStyleIsolation: true } })

// 由于子引用中使用route.push时，是根据子应用的base基础来拼接的，跳转会失败，
// 所以此处监控子应用的路由改变，直接在主应用中统一改变
actions.onGlobalStateChange((state, prev) => {
  console.log('prev:', prev, 'sta:', state, 'router:', router)
  if (state.link) {
    router.push(state.link)
  }
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
