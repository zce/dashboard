import Vue from 'vue'
import { sync } from 'vuex-router-sync'
import element from 'element-ui'
import App from './app'
import i18n from 'libraries/i18n'
import store from 'libraries/store'
import router from 'libraries/router'
import plugins from 'libraries/plugins'

// ## Import styles
// =========================
import 'assets/styles/element.css'

// ## Use plugins
// =========================
Vue.use(element)
Vue.use(plugins)
sync(store, router, { moduleName: 'route' })

// ## Config
// =========================
Vue.config.devtools = true
Vue.config.productionTip = false
Vue.config.debug = process.env.DEBUG_MODE

// ## Initial
// =========================
// ...

// ## Root app
// =========================
const app = new Vue({
  name: 'root',
  i18n: i18n,
  store: store,
  router: router,
  render: h => h(App)
})

// ## Mount to `#app` element
// =========================
app.$mount('#app')
