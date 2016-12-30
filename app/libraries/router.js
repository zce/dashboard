import Vue from 'vue'
import Router from 'vue-router'
import NProgress from 'nprogress'

import routes from './routes'

Vue.use(Router)

// http://router.vuejs.org/en/api/options.html
// http://router.vuejs.org/en/advanced/scroll-behavior.html
const router = new Router({
  mode: 'history',
  base: process.env.ADMIN_BASE || '/',
  routes: routes,
  scrollBehavior (to, from, savedPosition) {
    if (savedPosition) {
      // savedPosition is only available for popstate navigations.
      return savedPosition
    } else {
      const position = {}
      // new navigation.
      // scroll to anchor by returning the selector
      if (to.hash) {
        position.selector = to.hash
      }
      // check if any matched route config has meta that requires scrolling to top
      if (to.matched.some(m => m.meta.scrollToTop)) {
        // cords will be used if no selector is provided,
        // or if the selector didn't match any element.
        position.x = 0
        position.y = 0
      }
      // if the returned position is falsy or an empty object,
      // will retain current scroll position.
      return position
    }
  }
})

// Loading progress
router.beforeEach((to, from, next) => NProgress.start() && next())
router.afterEach(route => NProgress.done())

export default router
