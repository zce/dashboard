import { storage } from '../../utils'

/**
 * Initial state
 * @type {Object}
 */
const state = {
  message: storage.get('wedn_net_demo_message')
}

/**
 * Getters
 * @type {Object}
 */
const getters = {
  message: state => state.message
}

/**
 * Mutations
 * @type {Object}
 */
const mutations = {
  CHANGE_MESSAGE (state, message) {
    state.message = message
  }
}

/**
 * Actions
 * @type {Object}
 */
const actions = {
  changeMessage ({ commit }, message) {
    console.log(message)
    commit('CHANGE_MESSAGE', message)
  }
}

// Export module
export default { state, getters, mutations, actions }
