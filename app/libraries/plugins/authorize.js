import router from '../router'
import store from '../store'

export default Vue => {
  // Some middleware to help us ensure the user is authenticated.
  router.beforeEach((to, from, next) => {
    if (!to.meta.requiresAuth) return next()
    store.dispatch('checkLoggedIn')
      .then(loggedIn => {
        if (loggedIn) return next()
        console.log('Unauthorized')
        next({ name: 'login', query: { redirect: to.fullPath } })
      })
  })
}
