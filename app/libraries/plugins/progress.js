/**
 * Show progressbar on route && request
 */

import 'nprogress/nprogress.css'
import NProgress from 'nprogress'
import axios from 'axios'
import router from '../router'

function httpProgress (Vue) {
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
}

function routerProgress (Vue) {
  router.beforeEach((to, from, next) => NProgress.start() && next())
  router.afterEach(route => NProgress.done())
}

export default Vue => {
  httpProgress(Vue)
  routerProgress(Vue)

  // mount the nprogress to Vue component instance
  Object.defineProperties(Vue.prototype, {
    $nprogress: {
      get: () => NProgress
    }
  })
}
