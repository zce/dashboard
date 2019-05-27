/**
 * Posts service
 */

import Resource from './resource'

class Posts extends Resource {
  constructor () {
    super('posts')
  }

  getComments (id, options) {
    return this.axios.get(`/${this.base}/${id}/comments`, options)
  }
}

export default new Posts()
