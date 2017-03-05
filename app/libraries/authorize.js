import router from './router'
import store from './store'

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

// import http from './resource'
// http.interceptors.push((request, next) => {
//   // Enable this when you have a backend that you authenticate against
//   if (store.getters.token) {
//     const headers = request.headers
//     if (window.location.pathname !== '/login' && !headers.hasOwnProperty('Authorization')) {
//       headers.Authorization = 'JWT ' + store.getters.token
//     }
//     // console.log(headers)
//   }
//   next()
// })
