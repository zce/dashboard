// Import style sheets
import 'element-ui/lib/theme-default/index.css'
import 'nprogress/nprogress.css'
import './assets/less/global.less'
import './assets/less/dashicons.less'

import Vue from 'vue'
import Element from 'element-ui'
import { sync } from 'vuex-router-sync'

import App from './app'
import router from './libraries/router'
import store from './libraries/store'

import './libraries/i18n'
import './libraries/resource'
import './libraries/authorize'

// Use plugins
Vue.use(Element)
sync(store, router)

// Initial

// Root app
const app = new Vue({
  name: 'root',
  store: store,
  router: router,
  render: h => h(App)
})

// Mount to `#app` element
app.$mount('#app')
