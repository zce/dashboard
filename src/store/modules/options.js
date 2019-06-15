/**
 * Initial state
 */
const state = {
  /**
   * 配置选项
   */
  options: {}
}

/**
 * Getters
 */
const getters = {
  /**
   * 获取配置选项
   */
  options: state => state.options
}

/**
 * Mutations
 */
const mutations = {
  /**
   * 设置配置选项
   */
  CHANGE_OPTIONS: (state, options) => {
    Object.assign(state.options, options)
  }
}

/**
 * Actions
 */
const actions = {
  /**
   * 设置配置选项
   */
  changeOptions: async ({ commit }, options) => {
    commit('CHANGE_OPTIONS', options)
  }
}

// Export module
export default { state, getters, mutations, actions }
