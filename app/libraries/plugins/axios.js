// https://github.com/mzabriskie/axios
// https://juejin.im/entry/587599388d6d810058a7a41a
// https://www.mmxiaowu.com/article/589af8cde9be1c5b21ef8e9c

import axios from 'axios'

export default Vue => {
  const instance = axios.create({
    baseURL: 'http://jsonplaceholder.typicode.com/api/v1/',
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
