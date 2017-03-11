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
