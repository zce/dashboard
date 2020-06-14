import { TokenService, UserService } from '../services'
import { CHANGE_TITLE, CHANGE_SESSION, TOGGLE_SIDEBAR_COLLAPSE, INCREMENT, DECREMENT } from './mutation-types'

/**
 * @type {import('vuex/types').ActionTree<typeof import('./state').default>}
 */
const actions = {
  /**
   * 改变页面标题
   */
  changeTitle: ({ commit }, title) => {
    commit(CHANGE_TITLE, title)
  },

  /**
   * 创建新的客户端令牌
   */
  createToken: async ({ commit }, { username, password }) => {
    const res = await TokenService.post({
      username: username.trim(),
      password: password.trim()
    })
    commit(CHANGE_SESSION, { token: res.data.token })
    return res.data.token
  },

  /**
   * 检查客户端令牌是否可用
   */
  checkToken: async ({ commit, getters }) => {
    // validate local store
    if (!getters.session.token) {
      return Promise.resolve(false)
    }
    // remote
    try {
      await TokenService.get()
      return true
    } catch (err) {
      console.error(err)
      commit(CHANGE_SESSION, { token: null })
      return false
    }
  },

  /**
   * 删除客户端令牌
   */
  deleteToken: async ({ commit, getters }) => {
    await TokenService.delete(getters.session.token)
    commit(CHANGE_SESSION, { token: null })
  },

  /**
   * 获取当前登录用户信息
   */
  getCurrentUser: async ({ commit }) => {
    const res = await UserService.get('me')
    commit(CHANGE_SESSION, { user: res.data })
    return res.data
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

export default actions
