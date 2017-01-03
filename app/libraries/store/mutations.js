/**
 * 改变当前登录用户
 * @param  {Object} state Vuex状态对象
 */
export const CHANGE_USER = (state, user) => {
  state.current_user.slug = user.slug
  state.current_user.nickname = user.nickname
  state.current_user.avatar = user.avatar
}

/**
 * 切换边栏的展开收起
 * @param  {Object} state Vuex状态对象
 */
export const TOGGLE_SIDEBAR_COLLAPSE = state => {
  state.sidebarCollapse = !state.sidebarCollapse
}

// ==================== DEMO ====================

/**
 * 增加计数器计数
 * @param  {Object} state Vuex状态对象
 */
export const INCREMENT = state => {
  state.counter++
}

/**
 * 减少计数器计数
 * @param  {Object} state Vuex状态对象
 */
export const DECREMENT = state => {
  state.counter--
}
