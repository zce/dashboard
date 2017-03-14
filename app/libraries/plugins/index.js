/**
 * My Vue.js plugin
 */

import axios from './axios'
import title from './title'
import progress from './progress'

export default {
  install (Vue) {
    axios(Vue)
    title(Vue, { property: 'title', separator: ' « ' })
    progress(Vue, {})
  }
}
