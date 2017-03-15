/**
 * Inject Axios into Vue component
 */
// https://github.com/mzabriskie/axios
// https://juejin.im/entry/587599388d6d810058a7a41a
// https://www.mmxiaowu.com/article/589af8cde9be1c5b21ef8e9c

import axios from '../utils/axios'

export default Vue => {
  // mount the axios to Vue
  Vue.axios = axios
  // getter
  const $axios = { get: () => axios }
  // mount the axios to Vue component instance
  Object.defineProperties(Vue.prototype, {
    $axios: $axios,
    $http: $axios
  })
}
