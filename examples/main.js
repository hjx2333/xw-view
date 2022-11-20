import Vue from 'vue'
import App from './App.vue'

// 各类框架、插件
import xwView from '../packages/index'

Vue.config.productionTip = false
Vue.use(xwView)

new Vue({
  render: h => h(App)
}).$mount('#app')
