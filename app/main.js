import Vue from 'vue'
import Element from 'element-ui'
import { sync } from 'vuex-router-sync'

import App from './app'
import store from './libraries/store'
import router from './libraries/router'
import './libraries/i18n'
import './libraries/resource'
import './libraries/authorize'

// Import style sheets
import 'purecss/build/pure.css'
import 'nprogress/nprogress.css'
import 'animate.css/animate.css'
import './assets/less/global.less'
import './assets/less/dashicons.less'

// Use plugins
Vue.use(Element)
sync(store, router)

// Root app
const app = new Vue({
  name: 'root',
  store: store,
  router: router,
  render: h => h(App)
})

// Mount to #app element
app.$mount('#app')
