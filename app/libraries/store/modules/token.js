import http from '../../resource'

/**
 * Initial state
 * @type {Object}
 */
const state = {
  /**
   * 客户端令牌
   * @type {String}
   */
  token: ''
}

/**
 * Getters
 * @type {Object}
 */
const getters = {
  /**
   * 获取客户端令牌
   * @param  {Object} state Vuex状态对象
   * @return {String}       客户端令牌
   */
  token: state => state.token
}

/**
 * Mutations
 * @type {Object}
 */
const mutations = {
  /**
   * 改变当前客户端令牌
   * @param  {Object} state Vuex状态对象
   */
  CHANGE_TOKEN: (state, token) => {
    state.token = token
  }
}

/**
 * Actions
 * @type {Object}
 */
const actions = {
  /**
   * 创建一个新的客户端令牌
   */
  createToken: ({ commit }, payload) => {
    return http.demo('/api/v1/token', payload)
      .then(res => {
        commit('CHANGE_TOKEN', res.data.token)
        return res.data.token
      })
      .catch((e) => {
        commit('CHANGE_TOKEN', '')
        throw e
      })
  },

  /**
   * 创建一个新的客户端令牌
   */
  deleteToken: ({ commit }) => {
    commit('CHANGE_TOKEN', '')
  }
}

// Export module
export default { state, getters, mutations, actions }

// .then(() => {
//   const user = {
//     token: '$2a$08$Cxf4DH94cNDMKGDHeBO6BOMwKOOUuYI.BzgddpaFtNCJ6BB17b6xW',
//     slug: 'zce',
//     nickname: 'iceStone',
//     avatar: 'https://avatars3.githubusercontent.com/u/6166576?v=3&s=460'
//   }
//   commit('CHANGE_USER', user)
//   return user
// })
// .catch(err => {
//   commit('CHANGE_USER', {})
//   throw err
// })
