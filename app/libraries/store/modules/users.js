/**
 * Initial state
 * @type {Object}
 */
const state = {
  accessToken: '',
  slug: '',
  nickname: '',
  avatar: ''
}

/**
 * Getters
 * @type {Object}
 */
const getters = {
  accessToken: state => state.accessToken,
  slug: state => state.slug,
  nickname: state => state.nickname,
  avatar: state => state.avatar
}

/**
 * Mutations
 * @type {Object}
 */
const mutations = {
  SET_CURRENT_USER (state, user) {
    state.accessToken = user.accessToken
    state.slug = user.slug
    state.nickname = user.nickname
    state.avatar = user.avatar
  }
}

/**
 * Actions
 * @type {Object}
 */
const actions = {
  setCurrentUser ({ commit }, user) {
    commit('SET_CURRENT_USER', user)
  },
  login ({ dispatch }, username, password) {
    dispatch('setCurrentUser', {
      accessToken: 'SDIOQWJDMjsa90912nkJFKlkksdfno23nk==',
      slug: 'zce',
      nickname: 'iceStone',
      avatar: 'http://0.gravatar.com/avatar/6bfb40cd0a8d7bef077622a7beb96637?s=128&d=mm&r=g'
    })
  }
}

// Export module
export default { state, getters, mutations, actions }
