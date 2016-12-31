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
 * 减少计数器计数
 */
export const decrement = ({ commit }) => {
  commit('DECREMENT')
}
