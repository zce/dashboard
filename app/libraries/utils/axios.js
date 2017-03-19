/**
 * Custom axios instance
 * > - [Axios的配置](https://blog.ygxdxx.com/2017/01/29/Axios-Config/)
 * > - [Vuex2和Axios的开发](https://blog.ygxdxx.com/2017/02/01/Vuex2&Axios-Develop/)
 * > - [Axios全攻略](https://blog.ygxdxx.com/2017/02/27/Axios-Strategy/)
 */

import axios from 'axios'
import storage from './storage'

const STORAGE_KEY = 'wedn_net_access_token'

const instance = axios.create({
  // TODO: full url
  baseURL: 'http://jsonplaceholder.micua.com/api/v1/',
  timeout: 3000,
  headers: {
    // true: need, false: dont need
    'Authorization': true,
    'X-Requested-With': 'XMLHttpRequest',
    'X-Custom-Header': 'foobar'
  }
})

instance.interceptors.request.use(config => {
  // Add authorization in the header
  // TODO: token in store
  const token = storage.get(STORAGE_KEY)
  if (token && config.headers.Authorization) {
    config.headers.Authorization = `Bearer ${token}`
  }
  return config
})

export default instance
