import Vue from 'vue'
import Resource from 'vue-resource'
import NProgress from 'nprogress'

// https://github.com/pagekit/vue-resource/blob/master/docs/config.md
// Vue.http.headers.common['Authorization'] = 'Basic YXBpOnBhc3N3b3Jk'

Vue.use(Resource)

// Progress with AJAX
Vue.http.interceptors.push((request, next) => {
  request.before = () => NProgress.start()
  next(response => { NProgress.done() })
})

export default Vue.http
