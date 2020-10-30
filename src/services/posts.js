/**
 * Posts service
 */

import Resource from './resource'

class Posts extends Resource {
  constructor () {
    super('posts')
  }

  getComments (id, options) {
    return this.get(`${id}/comments`, options)
  }
}

export default new Posts()
