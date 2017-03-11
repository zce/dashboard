// # Interceptor that adds progressbar to all requests
// https://github.com/imcvampire/vue-resource-nprogress/blob/master/src/vue-resource-nprogress.js

/*
// Loading progress
router.beforeEach((to, from, next) => NProgress.start() && next())
router.afterEach(route => NProgress.done())

// Progress with AJAX
http.interceptors.push((request, next) => {
  request.before = () => NProgress.start()
  const res = next(() => { NProgress.done() })
  res && res.catch && res.catch(() => { NProgress.done() })
})
 */

import NProgress from 'nprogress'
import 'nprogress/nprogress.css'

function httpProgress (Vue, options) {
  let requestsTotal = 0
  let requestsCompleted = 0
  const latencyThreshold = options.latencyThreshold || 100

  function setComplete () {
    requestsTotal = 0
    requestsCompleted = 0
    NProgress.done()
  }

  Vue.http.interceptors.push((request, next) => {
    let showProgressBar = true
    if (request.showProgressBar != null) {
      showProgressBar = request.showProgressBar
      delete request.showProgressBar
    }

    let completed

    if (showProgressBar) {
      if (requestsTotal === 0) {
        setTimeout(() => NProgress.start(), latencyThreshold)
      }
      requestsTotal++
      completed = requestsCompleted / requestsTotal
      NProgress.set(completed)
    }

    next((response) => {
      if (!showProgressBar) return response

      if (!response.ok) {
        NProgress.done()
        setComplete()
      }

      // Finish progress bar 50 ms later
      setTimeout(() => {
        requestsCompleted++
        if (requestsCompleted >= requestsTotal) return setComplete()
        completed = (requestsCompleted / requestsTotal) - 0.1
        NProgress.set(completed)
      }, latencyThreshold + 50)

      return response
    })
  })
}

function routerProgress (Vue, options) {
  Vue.router.beforeEach((to, from, next) => NProgress.start() && next())
  Vue.router.afterEach(route => NProgress.done())
}

export default {
  install: (Vue, options = {}) => {
    httpProgress(Vue, options)
    routerProgress(Vue, options)
  }
}
