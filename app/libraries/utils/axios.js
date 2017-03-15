/**
 * # Custom axios instance
 * > - [Axios的配置](https://blog.ygxdxx.com/2017/01/29/Axios-Config/)
 * > - [Vuex2和Axios的开发](https://blog.ygxdxx.com/2017/02/01/Vuex2&Axios-Develop/)
 * > - [Axios全攻略](https://blog.ygxdxx.com/2017/02/27/Axios-Strategy/)
 */

import axios from 'axios'
import { session as storage } from './storage'

const STORAGE_KEY = 'wedn_net_access_token'

const instance = axios.create({
  baseURL: 'http://jsonplaceholder.typicode.com/api/v1/',
  timeout: 3000,
  headers: {
    'X-Requested-With': 'XMLHttpRequest',
    'X-Custom-Header': 'foobar',
    'Authorization': ''
  }
})

instance.interceptors.request.use(config => {
  // Add authorization in the header
  // TODO: token in store
  const token = storage.get(STORAGE_KEY)
  if (token) {
    config.headers.Authorization = `Bearer ${token}`
  }
  return config
})

export default instance
