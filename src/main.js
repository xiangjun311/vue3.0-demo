import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// import './registerServiceWorker' //打包后必须在server服务器下运行

import './common/index.js'

import iview from 'iview'
import 'iview/dist/styles/iview.css'

import './assets/css/global.css'
import './assets/font/style.css'

import helper from './common/util/helper.js'

// import Axios from "axios"
// import VueAxios from 'vue-axios'
Vue.use(helper)

// Vue.use(VueAxios,Axios) //VueAxios 必须放在前面，否则报错,区别以下写法更规范
// Vue.prototype.$http = Axios

Vue.use(iview)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
