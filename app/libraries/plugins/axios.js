import axios from 'axios'

export default Vue => {
  const instance = axios.create({
    baseURL: 'http://localhost:2017/api/v1/',
    timeout: 1000,
    headers: {
      'X-Requested-With': 'XMLHttpRequest',
      'X-Custom-Header': 'foobar',
      'Authorization': ''
    }
  })

  // mount the axios to Vue
  Vue.axios = instance

  // mount the axios to Vue component instance
  Object.defineProperties(Vue.prototype, {
    $axios: {
      get: () => instance
    },
    $http: {
      get: () => instance
    }
  })
}
