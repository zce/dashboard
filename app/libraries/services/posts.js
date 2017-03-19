/**
 * Posts service
 */

import { axios } from '../utils'

export default {
  get: (...args) => axios.get('/posts', ...args),
  delete: (...args) => axios.delete('/posts', ...args),
  head: (...args) => axios.head('/posts', ...args),
  post: (...args) => axios.post('/posts', ...args),
  put: (...args) => axios.put('/posts', ...args),
  patch: (...args) => axios.patch('/posts', ...args)
}
