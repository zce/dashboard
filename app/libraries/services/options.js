/**
 * # Options service
 */

import axios from '../utils/axios'

export default {
  get: (...args) => axios.get('/options', ...args),
  delete: (...args) => axios.delete('/options', ...args),
  head: (...args) => axios.head('/options', ...args),
  post: (...args) => axios.post('/options', ...args),
  put: (...args) => axios.put('/options', ...args),
  patch: (...args) => axios.patch('/options', ...args)
}
