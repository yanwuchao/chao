import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css';
import "./fonts/iconfont.css"
import "./style/global.css"//公共样式
// 配置axios

import axios from "axios"

// 配置请求根路径
axios.defaults.baseURL='http://47.115.124.102:8888/api/private/v1/'
Vue.prototype.$http = axios
Vue.config.productionTip = false

Vue.use(ElementUI);
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
