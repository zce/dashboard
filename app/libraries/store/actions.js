import { users } from '../services'

/**
 * 获取当前登录用户信息
 */
export const getCurrentUser = ({ commit }) => {
  return users.get('me')
    .then(res => {
      commit('CHANGE_USER', res.data)
      return res.data
    })
}

/**
 * 改变页面标题
 */
export const changeTitle = ({ commit }, title) => {
  commit('CHANGE_TITLE', title)
}

/**
 * 切换边栏的展开收起
 */
export const toggleSidebarCollapse = ({ commit }) => {
  commit('TOGGLE_SIDEBAR_COLLAPSE')
}

// ==================== DEMO ====================

/**
 * 增加计数器计数
 */
export const increment = ({ commit }) => {
  commit('INCREMENT')
}

/**
 * 增加计数器计数
 */
export const incrementAsync = ({ commit }) => {
  setTimeout(() => commit('INCREMENT'), 1000)
}

/**
 * 减少计数器计数
 */
export const decrement = ({ commit }) => {
  commit('DECREMENT')
}

/**
 * 减少计数器计数
 */
export const decrementAsync = ({ commit }) => {
  setTimeout(() => commit('DECREMENT'), 1000)
}
