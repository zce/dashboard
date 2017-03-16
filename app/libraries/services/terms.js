/**
 * # Terms service
 */

import axios from '../utils/axios'

export default {
  get: (...args) => axios.get('/terms', ...args),
  delete: (...args) => axios.delete('/terms', ...args),
  head: (...args) => axios.head('/terms', ...args),
  post: (...args) => axios.post('/terms', ...args),
  put: (...args) => axios.put('/terms', ...args),
  patch: (...args) => axios.patch('/terms', ...args)
}
