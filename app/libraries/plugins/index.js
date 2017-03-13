/**
 * My Vue.js plugin
 */

import title from './title'
import progress from './progress'

export default {
  install (Vue) {
    title(Vue, { property: 'title', separator: ' « ' })
    progress(Vue, {})
  }
}
