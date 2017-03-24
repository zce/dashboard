/**
 * 获取当前登录用户
 * @param  {Object} state Vuex状态对象
 * @return {Object}       当前登录用户
 */
export const currentUser = state => state.current_user

/**
 * 获取页面标题
 * @param  {Object} state Vuex状态对象
 * @return {String}       页面标题
 */
export const title = state => state.title

/**
 * 获取顶部工具栏
 * @param  {Object} state Vuex状态对象
 * @return {Object}       顶部工具栏
 */
export const header = state => state.header

/**
 * 获取侧边导航栏
 * @param  {Object} state Vuex状态对象
 * @return {Object}       侧边导航栏
 */
export const sidebar = state => state.sidebar

// ==================== DEMO ====================

/**
 * 获取计数器值
 * @param  {Object} state Vuex状态对象
 * @return {Number}       计数器值
 */
export const count = state => state.count
