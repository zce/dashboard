import Vue from 'vue'
import Resource from 'vue-resource'
import NProgress from 'nprogress'

Vue.use(Resource)

const http = Vue.http
const resource = Vue.resource

// https://github.com/pagekit/vue-resource/blob/master/docs/config.md
http.options.root = '/api/v1'
// add in store
// http.headers.common['Authorization'] = `JWT ${store.getters.token}`

// Progress with AJAX
http.interceptors.push((request, next) => {
  request.before = () => NProgress.start()
  const res = next(() => { NProgress.done() })
  res && res.catch && res.catch(() => { NProgress.done() })
})

export { http, resource as Resource }
