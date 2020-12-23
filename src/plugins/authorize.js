/**
 * Check login state
 * Some middleware to help us ensure the user is authenticated.
 * https://github.com/vuejs/vue-router/issues/1048
 * https://jsfiddle.net/yezr0jjt/
 */

import store from '../store'
import router from '../router'

export default app => {
  // Authorize (Make sure that is the first hook.)
  router.beforeEach((to, from, next) => {
    // don't need authorize
    if (!to.meta.requireAuth) return next()
    // check login state
    store.dispatch('checkToken')
      .then(valid => {
        // authorized
        if (valid) return next()
        // unauthorized
        console.log('Unauthorized')
        next({ name: 'login', query: { redirect: to.fullPath } })
      })
  })

  // login page visiable
  router.beforeEach((to, from, next) => {
    if (to.name !== 'login') return next()
    // check login state
    store.dispatch('checkToken')
      .then(valid => {
        if (!valid) return next()
        // when logged in
        console.log('Authorized')
        next({ path: to.query.redirect || '/' })
      })
  })
}
