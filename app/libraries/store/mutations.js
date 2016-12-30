/**
 * 隐藏框架展示
 * @param  {Object} state Vuex状态对象
 */
export const HIDE_FRAME = state => {
  state.frameless = false
}

/**
 * 使用框架展示
 * @param  {Object} state Vuex状态对象
 */
export const SHOW_FRAME = state => {
  state.frameless = true
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
