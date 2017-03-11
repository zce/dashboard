import Vue from 'vue'
import Resource from 'vue-resource'
import ElementUI from 'element-ui'
import App from './app'
import i18n from 'libraries/i18n'
import store from 'libraries/store'
import router from 'libraries/router'
import progressBar from 'libraries/plugins/progress-bar'

// ## Import styles
// =========================
import 'assets/styles/element.css'

// ## Use plugins
// =========================
Vue.use(Resource)
Vue.use(progressBar)
Vue.use(ElementUI)

// ## Config
// =========================
Vue.config.productionTip = false
Vue.config.debug = process.env.DEBUG_MODE
// https://github.com/pagekit/vue-resource/blob/master/docs/config.md
Vue.http.options.root = '/api/v1'
// add in store
// Vue.http.headers.common['Authorization'] = `JWT ${store.getters.token}`

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
