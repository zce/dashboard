import Vue from 'vue'
import Router from 'vue-router'
import NProgress from 'nprogress'

import routes from './routes'

Vue.use(Router)

// http://router.vuejs.org/en/api/options.html
const router = new Router({
  mode: 'history',
  base: '/',
  routes: routes
})

// Loading progress
router.beforeEach((to, from, next) => NProgress.start() && next())
router.afterEach(route => NProgress.done())

export default router
