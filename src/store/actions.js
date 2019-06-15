import { TokenService, UserService } from '../services'
import { CHANGE_SESSION, TOGGLE_SIDEBAR_COLLAPSE, INCREMENT, DECREMENT } from './mutation-types'

export default {
  /**
   * 改变页面标题
   */
  changeTitle: ({ commit }, title) => {
    commit(CHANGE_SESSION, { title: title })
  },

  /**
   * 创建新的客户端令牌
   */
  createToken: ({ commit }, { username, password }) => {
    return TokenService.post({
      username: username.trim(),
      password: password.trim()
    })
      .then(res => {
        commit(CHANGE_SESSION, { token: res.data.token })
        return res.data.token
      })
  },

  /**
   * 检查客户端令牌是否可用
   */
  checkToken: ({ commit, getters }) => {
    return new Promise((resolve, reject) => {
      // validate local store
      if (!getters.session.token) {
        return resolve(false)
      }
      // remote
      TokenService.get()
        .then(res => resolve(true))
        .catch(err => {
          console.error(err)
          commit(CHANGE_SESSION, { token: null })
          resolve(false)
        })
    })
  },

  /**
   * 删除客户端令牌
   */
  deleteToken: ({ commit, getters }) => {
    return TokenService.delete(getters.session.token)
      .then(res => {
        commit(CHANGE_SESSION, { token: null })
      })
  },

  /**
   * 获取当前登录用户信息
   */
  getCurrentUser: ({ commit }) => {
    return UserService.get('me')
      .then(res => {
        commit(CHANGE_SESSION, { user: res.data })
        return res.data
      })
  },

  /**
   * 切换边栏的展开收起
   */
  toggleSidebarCollapse: ({ commit }) => {
    commit(TOGGLE_SIDEBAR_COLLAPSE)
  },

  // ==================== DEMO ====================

  /**
   * 增加计数器计数
   */
  increment: ({ commit }) => commit(INCREMENT),

  /**
   * 增加计数器计数
   */
  incrementAsync: ({ commit }) => setTimeout(() => commit(INCREMENT), 1000),

  /**
   * 减少计数器计数
   */
  decrement: ({ commit }) => commit(DECREMENT),

  /**
   * 减少计数器计数
   */
  decrementAsync: ({ commit }) => setTimeout(() => commit(DECREMENT), 1000)
}
