import { local as storage } from '../utils/storage'

/**
 * 切换边栏的展开收起
 * @param  {Object} state Vuex状态对象
 */
export const TOGGLE_SIDEBAR_COLLAPSE = state => {
  state.sidebar_collapse = !state.sidebar_collapse
  storage.set('wedn_net_sidebar_collapse', state.sidebar_collapse)
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
