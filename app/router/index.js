import Vue from 'vue'
import Router from 'vue-router'

import NProgress from 'nprogress'
import 'nprogress/nprogress.css'

import routes from './routes'

Vue.use(Router)

const router = new Router({
  // http://router.vuejs.org/en/api/options.html
  mode: 'history',
  base: '/',
  routes: routes
})

// start
router.beforeEach((to, from, next) => {
  NProgress.start()
  next()
})

// end
router.afterEach(() => {
  NProgress.done()
})

export default router
