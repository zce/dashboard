import { resource } from 'vue'

const tokens = resource('tokens', {}, {
  create: { method: 'POST', url: 'tokens' },
  check: { method: 'GET', url: 'tokens' }
})

export default tokens
