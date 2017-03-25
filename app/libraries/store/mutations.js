import { axios, storage } from '../utils'

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

/**
 * 改变当前访问令牌
 * @param  {Object} state Vuex状态对象
 */
export const CHANGE_TOKEN = (state, token) => {
  const STORAGE_KEY = 'wedn_net_access_token'
  if (!token) {
    // delete
    delete state.token
    return storage.remove(STORAGE_KEY)
  }
  // change axios authorization header
  axios.defaults.headers.Authorization = `Bearer ${token}`
  state.token = token
  storage.set(STORAGE_KEY, state.token)
}

/**
 * 改变当前登录用户
 * @param  {Object} state   Vuex状态对象
 * @param  {Object} user    新的当前登录用户
 */
export const CHANGE_USER = (state, user) => {
  state.current_user = user
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
