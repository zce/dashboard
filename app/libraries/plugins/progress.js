/**
 * Show progressbar on route && request
 */

import 'nprogress/nprogress.css'
import NProgress from 'nprogress'
import axios from '../utils/axios'
import router from '../router'

export default Vue => {
  // Add a request interceptor
  axios.interceptors.request.use(config => {
    // Do something before request is sent
    NProgress.start()
    return config
  })

  // Add a response interceptor
  axios.interceptors.response.use(response => {
    // Do something with response data
    NProgress.done()
    return response
  })

  // Add nprogress to route
  router.beforeEach((to, from, next) => NProgress.start() && next())
  router.afterEach(route => NProgress.done())

  // mount the nprogress to Vue component instance
  Object.defineProperties(Vue.prototype, {
    $nprogress: {
      get: () => NProgress
    }
  })
}
