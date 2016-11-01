import Vue from 'vue'
import Router from 'vue-router'

import routes from './routes'

Vue.use(Router)

export default new Router({
  // http://router.vuejs.org/en/api/options.html
  mode: 'history',
  base: '/',
  routes: routes
})
