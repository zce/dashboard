/**
 * # Comments service
 */

import axios from '../utils/axios'

export default {
  get: (...args) => axios.get('/comments', ...args),
  delete: (...args) => axios.delete('/comments', ...args),
  head: (...args) => axios.head('/comments', ...args),
  post: (...args) => axios.post('/comments', ...args),
  put: (...args) => axios.put('/comments', ...args),
  patch: (...args) => axios.patch('/comments', ...args)
}
