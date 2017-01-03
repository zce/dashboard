import Vue from 'vue'
import Resource from 'vue-resource'
import NProgress from 'nprogress'

// https://github.com/pagekit/vue-resource/blob/master/docs/config.md
// Vue.http.headers.common['Authorization'] = 'Basic YXBpOnBhc3N3b3Jk'

Vue.use(Resource)

// Progress with AJAX
Vue.http.interceptors.push((request, next) => {
  request.before = () => NProgress.start()
  const res = next(() => { NProgress.done() })
  res && res.catch && res.catch(() => { NProgress.done() })
})

Vue.http.demo = (url, data) => new Promise((resolve, reject) => {
  NProgress.start()
  setTimeout(function () {
    NProgress.done()
    if (data.username === 'admin' && data.password === 'password') {
      return resolve({ data: { error: false, token: 'demo_token' } })
    }
    return reject(new Error('test user: admin, password: password'))
  }, 1000)
})

export default Vue.http
