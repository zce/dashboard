import { Resource } from '../resource'

const tokens = new Resource('tokens', {}, {
  create: { method: 'POST', url: 'tokens' },
  check: { method: 'GET', url: 'tokens' }
})

export default tokens
