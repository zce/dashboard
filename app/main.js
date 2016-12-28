import Vue from 'vue'
import App from './app'
import store from './libraries/store'
import router from './libraries/router'
import './libraries/i18n'
import './libraries/resource'

// Import style sheets
import 'normalize.css/normalize.css'
import 'nprogress/nprogress.css'
// import 'font-awesome/css/font-awesome.css'
import './assets/less/global.less'
import './assets/less/dashicons.less'

// // Use plugins
// Vue.use(Router)

// Root app
const app = new Vue({
  name: 'root',
  store: store,
  router: router,
  render: h => h(App)
})

// Mount to #app element
app.$mount('#app')
