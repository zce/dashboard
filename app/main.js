import Vue from 'vue'
import Resource from 'vue-resource'
import Element from 'element-ui'

import App from './app'
import router from './router'

// Import style sheets
import 'normalize.css/normalize.css'
import 'element-ui/lib/theme-default/index.css'
import './assets/less/global.less'

// Use plugins
Vue.use(Resource)
Vue.use(Element)

// Root app
const app = new Vue({
  name: 'root',
  router: router,
  render: h => h(App)
})

// Mount to #app element
app.$mount('#app')
