import Vue from 'vue'
import Resource from 'vue-resource'
import NProgress from 'nprogress'
import App from './app'
import router from './router'

// Import style sheets
import 'normalize.css/normalize.css'
import 'nprogress/nprogress.css'
import 'font-awesome/css/font-awesome.css'
import './assets/less/global.less'

// Use plugins
Vue.use(Resource)

// start
router.beforeEach((to, from, next) => {
  NProgress.start()
  next()
})

// end
router.afterEach(route => {
  NProgress.done()
})

// Root app
const app = new Vue({
  name: 'root',
  router: router,
  render: h => h(App)
})

// Mount to #app element
app.$mount('#app')
