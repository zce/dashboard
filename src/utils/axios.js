/**
 * Custom axios instance
 * > - [Axios的配置](https://blog.ygxdxx.com/2017/01/29/Axios-Config/)
 * > - [Vuex2和Axios的开发](https://blog.ygxdxx.com/2017/02/01/Vuex2&Axios-Develop/)
 * > - [Axios全攻略](https://blog.ygxdxx.com/2017/02/27/Axios-Strategy/)
 * > - [Vue 全家桶 + axios 前端实现登录拦截、登出、拦截器等功能](https://github.com/superman66/vue-axios-github)
 * > - [axios和网络传输相关知识的学习实践](http://www.jianshu.com/p/8e5fb763c3d7)
 * > - [Vue.js REST API Consumption with Axios](https://alligator.io/vuejs/rest-api-axios/)
 */

import axios from 'axios'
// import storage from './storage'

const instance = axios.create({
  // baseURL: 'http://localhost:2080/',
  baseURL: 'https://jsonplaceholder.uieee.com/',
  timeout: 5000,
  headers: {
    // 'X-Custom-Header': 'foobar',
    // // true: need, false: dont need
    // 'Authorization': true,
    // 'X-Requested-With': 'XMLHttpRequest'
  }
})

// instance.interceptors.request.use(config => {
//   // Add authorization in the header
//   // TODO: token in store
//   const token = storage.get('wedn_net_access_token')
//   if (token && config.headers.Authorization) {
//     config.headers.Authorization = `Bearer ${token}`
//   }
//   return config
// })

export default instance
