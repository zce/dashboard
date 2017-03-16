/**
 * Inject NProgress into Vue component
 * Show progressbar when route & ajax
 */

import router from '../router'
import axios from '../utils/axios'
import NProgress from '../utils/nprogress'

export default Vue => {
  // Add nprogress to route
  router.beforeEach((to, from, next) => {
    // console.log('before each')
    NProgress.start()
    next()
  })
  router.afterEach(route => {
    // console.log('after each')
    NProgress.done()
  })

  // Add nprogress to ajax
  axios.interceptors.request.use(config => {
    NProgress.start()
    return config
  })
  axios.interceptors.response.use(response => {
    NProgress.done()
    return response
  }, error => {
    NProgress.done()
    return Promise.reject(error)
  })

  // mount the nprogress to Vue component instance
  Object.defineProperties(Vue.prototype, {
    $nprogress: {
      get: () => NProgress
    }
  })
}
