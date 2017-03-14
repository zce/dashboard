/**
 * Initial state
 * @type {Object}
 */
const state = {
  /**
   * 配置选项
   * @type {Object}
   */
  options: {}
}

/**
 * Getters
 * @type {Object}
 */
const getters = {
  /**
   * 获取配置选项
   * @param  {Object} state Vuex状态对象
   * @return {Object}       配置选项
   */
  options: state => state.options
}

/**
 * Mutations
 * @type {Object}
 */
const mutations = {
  /**
   * 设置配置选项
   * @param  {Object} state   Vuex状态对象
   * @param  {Object} options 新的配置选项
   */
  CHANGE_OPTIONS: (state, options) => {
    Object.assign(state.options, options)
  }
}

/**
 * Actions
 * @type {Object}
 */
const actions = {
  /**
   * 设置配置选项
   */
  changeOptions: async ({ commit }, options) => {
    commit('CHANGE_OPTIONS', {})
  }
}

// Export module
export default { state, getters, mutations, actions }
