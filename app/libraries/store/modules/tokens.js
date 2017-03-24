/**
 * Authoriztion token
 * TODO: storage - local or session
 * https://github.com/auth0-blog/vue-jwt-authentication
 * https://auth0.com/blog/build-an-app-with-vuejs/
 */

import { tokens } from '../../services'
import { axios, storage } from '../../utils'

const STORAGE_KEY = 'wedn_net_access_token'

/**
 * Initial state
 * @type {Object}
 */
const state = {
  /**
   * 访问令牌
   * @type {Object}
   */
  token: storage.get(STORAGE_KEY)
}

/**
 * Getters
 * @type {Object}
 */
const getters = {
  /**
   * 获取访问令牌
   * @param  {Object} state Vuex状态对象
   * @return {Object}       访问令牌
   */
  token: state => state.token
}

/**
 * Mutations
 * @type {Object}
 */
const mutations = {
  /**
   * 改变当前访问令牌
   * @param  {Object} state Vuex状态对象
   */
  CHANGE_TOKEN: (state, token) => {
    if (!token) {
      // delete
      delete state.token
      return storage.remove(STORAGE_KEY)
    }
    // change axios authorization header
    axios.defaults.headers.Authorization = `Bearer ${token}`
    state.token = token
    storage.set(STORAGE_KEY, state.token)
  }
}

/**
 * Actions
 * @type {Object}
 */
const actions = {
  /**
   * 创建新的客户端令牌
   */
  createToken ({ commit }, { username, password }) {
    return tokens.post({
      username: username.trim(),
      password: password.trim()
    })
    .then(res => {
      commit('CHANGE_TOKEN', res.data.token)
      return res.data.token
    })
  },

  /**
   * 检查客户端令牌是否可用
   */
  checkToken ({ commit, getters }) {
    return new Promise((resolve, reject) => {
      // validate local store
      if (!getters.token) {
        return resolve(false)
      }
      // remote
      tokens.get()
        .then(res => resolve(true))
        .catch(err => {
          console.error(err)
          commit('CHANGE_TOKEN')
          resolve(false)
        })
    })
  },

  /**
   * 删除客户端令牌
   */
  deleteToken ({ commit }) {
    return tokens.delete()
      .then(res => {
        commit('CHANGE_TOKEN')
      })
  }
}

// change axios authorization header
axios.defaults.headers.Authorization = `Bearer ${state.token}`

// Export module
export default { state, getters, mutations, actions }
