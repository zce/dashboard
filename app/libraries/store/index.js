/**
 * Vuex docs
 * https://vuex.vuejs.org/zh-cn
 * https://github.com/vuejs/vue-hackernews-2.0
 * http://www.ruanyifeng.com/blog/2014/05/restful_api.html
 */
import Vue from 'vue'
import Vuex from 'vuex'

import * as state from './state'
import * as getters from './getters'
import * as mutations from './mutations'
import * as actions from './actions'

import menus from './modules/menus'
import options from './modules/options'

Vue.use(Vuex)

const strict = process.env.NODE_ENV !== 'production'

const modules = { menus, options }

const plugins = []

const store = new Vuex.Store({ state, getters, mutations, actions, modules, strict, plugins })

if (module.hot) {
  const accepts = [
    './state',
    './getters',
    './mutations',
    './actions',
    './modules/menus',
    './modules/options'
  ]
  module.hot.accept(accepts, () => {
    store.hotUpdate({
      state: require('./state'),
      getters: require('./getters'),
      mutations: require('./mutations'),
      actions: require('./actions'),
      modules: {
        menus: require('./modules/menus').default,
        options: require('./modules/options').default
      }
    })
  })
}

export default store
