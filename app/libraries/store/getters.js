/**
 * 获取页面标题
 * @param  {Object} state Vuex状态对象
 * @return {String}       页面标题
 */
export const title = state => state.title

/**
 * 获取客户端会话信息
 * @param  {Object} state Vuex状态对象
 * @return {Object}       客户端会话信息
 */
export const session = state => state.session

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
