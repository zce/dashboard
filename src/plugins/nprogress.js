/**
 * Inject NProgress into Vue component
 * Show progressbar when route & ajax
 */

import router from '../router'
import { axios, nprogress } from '../utils'

export default app => {
  // Add nprogress to route
  router.beforeEach((to, from, next) => {
    nprogress.start()
    next()
  })
  router.afterEach(route => {
    nprogress.done()
  })

  // Add nprogress to ajax
  axios.interceptors.request.use(config => {
    nprogress.start()
    return config
  })
  axios.interceptors.response.use(response => {
    nprogress.done()
    return response
  }, err => {
    nprogress.done()
    return Promise.reject(err)
  })

  // mount the nprogress to Vue component instance
  app.config.globalProperties.$nprogress = nprogress
}
