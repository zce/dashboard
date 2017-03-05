/**
 * 切换边栏的展开收起
 * @param  {Object} state Vuex状态对象
 */
export const TOGGLE_SIDEBAR_COLLAPSE = state => {
  state.sidebar_collapse = !state.sidebar_collapse
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
