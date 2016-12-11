import Vue from 'vue'
import Router from 'vue-router'

import routes from './routes'

Vue.use(Router)

// http://router.vuejs.org/en/api/options.html
export default new Router({
  mode: 'history',
  base: '/',
  routes: routes
})
