/**
 * 获取站点名称
 * @param  {Object} state Vuex状态对象
 * @return {String}       站点名称
 */
export const name = state => state.name

/**
 * 获取版权所属
 * @param  {Object} state Vuex状态对象
 * @return {String}       版权所属
 */
export const copyright = state => state.copyright

/**
 * 获取当前登录用户
 * @param  {Object} state Vuex状态对象
 * @return {String}       当前登录用户
 */
export const currentUser = state => state.current_user

/**
 * 获取是否收起边栏
 * @param  {Object} state Vuex状态对象
 * @return {Boolean}       是否收起边栏
 */
export const sidebarCollapse = state => state.sidebarCollapse

// ==================== DEMO ====================

/**
 * 获取计数器值
 * @param  {Object} state Vuex状态对象
 * @return {Number}       计数器值
 */
export const counter = state => state.counter
