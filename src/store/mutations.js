import { axios, storage } from '../utils'

/**
 * 改变客户端会话信息
 * @param  {Object} state   Vuex状态对象
 * @param  {Object} session 新的客户端会话信息
 */
export const CHANGE_SESSION = (state, session) => {
  if (session && session.token) {
    // change axios authorization header
    axios.defaults.headers.Authorization = `Bearer ${session.token}`
  }
  // TODO: new session mixin
  Object.assign(state.session, session)
  storage.set('wedn_net_session_info', state.session)
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
