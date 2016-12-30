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
 * 获取是否启用无框架模式
 * @param  {Object} state Vuex状态对象
 * @return {Boolean}       是否启用无框架模式
 */
export const frameless = state => state.frameless

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
