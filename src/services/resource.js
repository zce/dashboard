/**
 * Resource class
 */

import { axios } from '../utils'

export default class Resource {
  constructor (base) {
    this.base = base
    this.axios = axios
  }

  get (id, options) {
    let url = `/${this.base}`
    if (typeof id === 'object') {
      options = id
    } else if (id !== undefined) {
      url += `/${id}`
    }
    return this.axios.get(url, options)
  }

  post (options) {
    const url = `/${this.base}`
    return this.axios.post(url, options)
  }

  put (id, options) {
    const url = `/${this.base}/${id}`
    return this.axios.put(url, options)
  }

  patch (id, options) {
    const url = `/${this.base}/${id}`
    return this.axios.patch(url, options)
  }

  delete (id, options) {
    const url = `/${this.base}/${id}`
    return this.axios.delete(url, options)
  }
}
