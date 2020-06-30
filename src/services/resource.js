/**
 * Resource class
 * http://www.ruanyifeng.com/blog/2014/05/restful_api.html
 */

import { axios } from '../utils'

export default class Resource {
  constructor (endpoint) {
    this.endpoint = endpoint
  }

  get (id, options) {
    let url = `/${this.endpoint}`
    if (typeof id === 'object') {
      options = id
    } else if (id !== undefined) {
      url += `/${id}`
    }
    return axios.get(url, options)
  }

  post (options) {
    const url = `/${this.endpoint}`
    return axios.post(url, options)
  }

  put (id, options) {
    const url = `/${this.endpoint}/${id}`
    return axios.put(url, options)
  }

  patch (id, options) {
    const url = `/${this.endpoint}/${id}`
    return axios.patch(url, options)
  }

  delete (id, options) {
    const url = `/${this.endpoint}/${id}`
    return axios.delete(url, options)
  }
}
