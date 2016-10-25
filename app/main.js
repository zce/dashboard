import Vue from 'vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import Element from 'element-ui'

import App from './app'
import routes from './routes'

import 'normalize.css/normalize.css'
// import 'bootstrap/dist/css/bootstrap.css'
import 'element-ui/lib/theme-default/index.css'

import './assets/less/global.less'

Vue.use(VueRouter)
Vue.use(VueResource)
Vue.use(Element)

const router = new VueRouter({
  // http://router.vuejs.org/en/api/options.html
  mode: 'history',
  base: '/',
  routes: routes
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router: router,
  render: h => h(App)
})
