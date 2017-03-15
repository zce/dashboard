import { local as storage } from '../utils/storage'

/**
 * 改变页面标题
 * @param  {Object} state Vuex状态对象
 * @param  {String} title 新的页面标题
 */
export const CHANGE_TITLE = (state, title) => {
  document.title = state.title = title
}

/**
 * 切换边栏的展开收起
 * @param  {Object} state Vuex状态对象
 */
export const TOGGLE_SIDEBAR_COLLAPSE = state => {
  state.sidebar.collapse = !state.sidebar.collapse
  storage.set('wedn_net_sidebar_collapse', state.sidebar.collapse)
}

// ==================== DEMO ====================

/**
 * 增加计数器计数
 * @param  {Object} state Vuex状态对象
 */
export const INCREMENT = state => {
  state.count++
  storage.set('wedn_net_demo_count', state.count)
}

/**
 * 减少计数器计数
 * @param  {Object} state Vuex状态对象
 */
export const DECREMENT = state => {
  state.count--
  storage.set('wedn_net_demo_count', state.count)
}
