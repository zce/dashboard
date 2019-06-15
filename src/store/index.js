/**
 * Vuex docs
 * https://vuex.vuejs.org/zh-cn
 * https://github.com/vuejs/vue-hackernews-2.0
 */

import Vue from 'vue'
import Vuex from 'vuex'

// // Make sure state writeable
// import * as state from './state' // prop readonly
import state from './state'
import getters from './getters'
import mutations from './mutations'
import actions from './actions'
import modules from './modules'
import plugins from './plugins'

Vue.use(Vuex)

const strict = process.env.NODE_ENV !== 'production'

const store = new Vuex.Store({ state, getters, mutations, actions, modules, plugins, strict })

// ## Initial
// store.dispatch('initToken')
// // change axios authorization header
// axios.defaults.headers.Authorization = `Bearer ${storage.get('wedn_net_access_token')}`

// ## Hot module replacement
if (module.hot) {
  module.hot.accept([
    './getters',
    './mutations',
    './actions',
    './modules/comments',
    './modules/options',
    './modules/posts',
    './modules/terms',
    './modules/users'
  ], () => {
    store.hotUpdate({
      getters: require('./getters'),
      mutations: require('./mutations'),
      actions: require('./actions'),
      modules: {
        comments: require('./modules/comments'),
        options: require('./modules/options'),
        posts: require('./modules/posts'),
        terms: require('./modules/terms'),
        users: require('./modules/users')
      }
    })
  })
}

export default store

// // accept first param must be literal !!!
// if (module.hot) {
//   const accepts = [
//     './getters',
//     './mutations',
//     './actions'
//   ]
//   module.hot.accept(accepts, () => {
//     store.hotUpdate({
//       getters: require('./getters'),
//       mutations: require('./mutations'),
//       actions: require('./actions')
//     })
//   })
// }
