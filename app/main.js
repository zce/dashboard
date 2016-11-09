import Vue from 'vue'
// import Resource from 'vue-resource'

import App from './app'
import router from './router'

// Import style sheets
import 'normalize.css/normalize.css'
import './assets/less/global.less'

// Use plugins
// Vue.use(Resource)

// Root app
const app = new Vue({
  name: 'root',
  router: router,
  render: h => h(App)
})

// Mount to #app element
app.$mount('#app')
