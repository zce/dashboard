/**
 * Users service
 */

import { axios } from '../utils'

export default {
  get: (id) => axios.get(`/users${id && '/' + id}`),
  delete: (...args) => axios.delete('/users', ...args),
  head: (...args) => axios.head('/users', ...args),
  post: (...args) => axios.post('/users', ...args),
  put: (...args) => axios.put('/users', ...args),
  patch: (...args) => axios.patch('/users', ...args)
}
