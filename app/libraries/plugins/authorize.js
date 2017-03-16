/**
 * Check login state
 * Some middleware to help us ensure the user is authenticated.
 * Make sure that is the first hook.
 * https://github.com/vuejs/vue-router/issues/1048
 * https://jsfiddle.net/yezr0jjt/
 */

import router from '../router'
import store from '../store'

export default Vue => {
  // login page visiable
  router.beforeHooks.unshift((to, from, next) => {
    if (to.name !== 'login') return next()
    // check login state
    store.dispatch('checkLogin')
      .then(loggedIn => {
        if (!loggedIn) return next()
        // when logged in
        console.log('dont need authorize')
        next({ path: to.query.redirect || '/' })
      })
  })

  // auth
  router.beforeHooks.unshift((to, from, next) => {
    // don't need authorize
    if (!to.meta.requiresAuth) return next()
    // check login state
    store.dispatch('checkLogin')
      .then(loggedIn => {
        // authorized
        if (loggedIn) return next()
        // unauthorized
        console.log('Unauthorized')
        next({ name: 'login', query: { redirect: to.fullPath } })
      })
  })
}
