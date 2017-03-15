/**
 * Authoriztion token
 * TODO: storage - local or session
 */

// import { tokens } from 'libraries/services'
import { local as storage } from 'libraries/utils/storage'

const STORAGE_KEY = 'wedn_net_access_token'

/**
 * Initial state
 * @type {Object}
 */
const state = {
  /**
   * 客户端令牌
   * @type {String}
   */
  token: storage.get(STORAGE_KEY),

  /**
   * 当前登录用户
   * @type {Object}
   */
  current_user: {
    id: null,
    slug: null,
    avatar: require('assets/images/avatar.svg'),
    username: 'zce',
    nickname: 'iceStone',
    email: null,
    mobile: null
  }
}

/**
 * Getters
 * @type {Object}
 */
const getters = {
  /**
   * 获取客户端令牌
   * @param  {Object} state Vuex状态对象
   * @return {String}       客户端令牌
   */
  token: state => state.token,

  /**
   * 获取当前登录用户
   * @param  {Object} state Vuex状态对象
   * @return {String}       当前登录用户
   */
  currentUser: state => state.current_user
}

/**
 * Mutations
 * @type {Object}
 */
const mutations = {
  /**
   * 改变当前客户端令牌
   * @param  {Object} state Vuex状态对象
   */
  CHANGE_TOKEN: (state, token) => {
    state.token = token
    if (state.token) {
      // http.headers.common['Authorization'] = `JWT ${token}`
      return storage.set(STORAGE_KEY, token)
    }
    // delete http.headers.common['Authorization']
    return storage.remove(STORAGE_KEY)
  },

  /**
   * 改变当前登录用户
   * @param  {Object} state Vuex状态对象
   */
  CHANGE_USER: (state, user) => {
    state.current_user.id = user.id
    state.current_user.slug = user.slug
    state.current_user.avatar = user.avatar
    state.current_user.username = user.username
    state.current_user.nickname = user.nickname
    state.current_user.email = user.email
    state.current_user.mobile = user.mobile
  }
}

/**
 * Actions
 * @type {Object}
 */
const actions = {
  /**
   * 从本地存储中初始化令牌
   */
  initToken: ({ commit }) => {
    commit('CHANGE_TOKEN', storage.get(STORAGE_KEY))
  },

  /**
   * 创建一个新的客户端令牌
   */
  createToken ({ commit }, payload) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (!(payload.username === 'admin' && payload.password === 'password')) {
          commit('CHANGE_TOKEN', '')
          return reject(new Error('Incorrect username or password.'))
        }
        const token = Date.now()
        commit('CHANGE_TOKEN', token)
        return resolve(token)
      }, 1000)
    })
  },

  /**
   * 检查令牌是否可用
   */
  checkToken: ({ commit, dispatch }, token) => {
    return Promise.resolve(true)
  },

  /**
   * 检查登录状态
   */
  checkLoggedIn: ({ getters, dispatch }) => {
    if (!getters.token) return Promise.resolve(false)
    return dispatch('checkToken', getters.token)
  },

  /**
   * 删除客户端令牌
   */
  deleteToken: ({ commit }) => {
    commit('CHANGE_TOKEN', '')
  }
}

// Export module
export default { state, getters, mutations, actions }
