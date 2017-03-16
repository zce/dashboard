/**
 * # Tokens service
 */

import axios from '../utils/axios'

export default {
  get: (...args) => axios.get('/tokens', ...args),
  delete: (...args) => axios.delete('/tokens', ...args),
  head: (...args) => axios.head('/tokens', ...args),
  post: (...args) => axios.post('/tokens', ...args),
  put: (...args) => axios.put('/tokens', ...args),
  patch: (...args) => axios.patch('/tokens', ...args)
}
