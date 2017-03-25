import { tokens, users } from '../services'

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

/**
 * 创建新的客户端令牌
 */
export const createToken = ({ commit }, { username, password }) => {
  return tokens.post({
    username: username.trim(),
    password: password.trim()
  })
  .then(res => {
    commit('CHANGE_TOKEN', res.data.token)
    return res.data.token
  })
}

/**
 * 检查客户端令牌是否可用
 */
export const checkToken = ({ commit, getters }) => {
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
}

/**
 * 删除客户端令牌
 */
export const deleteToken = ({ commit }) => {
  return tokens.delete()
    .then(res => {
      commit('CHANGE_TOKEN')
    })
}

/**
 * 获取当前登录用户信息
 */
export const getCurrentUser = ({ commit }) => {
  return users.getItem('me')
    .then(res => {
      commit('CHANGE_USER', res.data)
      return res.data
    })
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
