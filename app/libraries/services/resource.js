/**
 * Resource class
 */

import { axios } from '../utils'

function Resource (base, otherActions) {
  this.base = base
  Object.assign(this, otherActions)
}

Resource.prototype = {
  get (id, options) {
    let url = `/${this.base}`
    if (typeof id === 'object') {
      options = id
    } else if (id !== undefined) {
      url += `/${id}`
    }
    return axios.get(url, options)
  },
  delete (id, options) {
    const url = `/${this.base}/${id}`
    return axios.delete(url, options)
  },
  post (options) {
    const url = `/${this.base}`
    return axios.post(url, options)
  },
  put (id, options) {
    const url = `/${this.base}/${id}`
    return axios.put(url, options)
  },
  patch (id, options) {
    const url = `/${this.base}/${id}`
    return axios.patch(url, options)
  }
}

export default Resource

// const defaultActions = {
//   get: { method: 'GET' },
//   save: { method: 'POST' },
//   query: { method: 'GET' },
//   update: { method: 'PUT' },
//   remove: { method: 'DELETE' },
//   delete: { method: 'DELETE' }
// }
