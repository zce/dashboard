/**
 * # Custom axios instance
 * > - [Axios的配置](https://blog.ygxdxx.com/2017/01/29/Axios-Config/)
 * > - [Vuex2和Axios的开发](https://blog.ygxdxx.com/2017/02/01/Vuex2&Axios-Develop/)
 * > - [Axios全攻略](https://blog.ygxdxx.com/2017/02/27/Axios-Strategy/)
 */

import axios from 'axios'
import { local as storage } from './storage'

const STORAGE_KEY = 'wedn_net_access_token'

const instance = axios.create({
  // TODO: full url
  baseURL: 'http://jsonplaceholder.micua.com/api/v1/',
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
  console.log(token)
  if (token) {
    config.headers.Authorization = `Bearer ${token}`
  }
  return config
})

export default instance
