import router from './router'
import http from './resource'

http.interceptors.push((request, next) => {
  /*
    Enable this when you have a backend that you authenticate against
  var headers = request.headers

  if (window.location.pathname !== '/login' && !headers.hasOwnProperty('Authorization')) {
    headers.Authorization = this.$store.state.token
  }
  */
  // console.log(headers)

  // continue to next interceptor without modifying the response
  next()
})

// Some middleware to help us ensure the user is authenticated.
router.beforeEach((to, from, next) => {
  // next()

  if (!to.meta.requiresAuth) return next()
  console.log(router.app.$store.getters.accessToken)
  if (router.app.$store.getters.accessToken) return next()
  console.log('Unauthorized')
  next({ name: 'login', query: { redirect: to.fullPath } })

  // window.console.log('Transition', transition)
  // if (to.authenticated && ) {
  // to.matched.some(record => record.meta.requiresAuth)
  // if (to.meta.requiresAuth && router.app.$store.getters.token) {
  //   console.log('Unauthorized')
  //   next({
  //     name: 'login',
  //     query: { redirect: to.fullPath }
  //   })
  // } else {
  //   next()
  // }
})
