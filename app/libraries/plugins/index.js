/**
 * My Vue.js plugin
 */

import axios from './axios'
import title from './title'
import nprogress from './nprogress'
import authorize from './authorize'

export default {
  install (Vue) {
    axios(Vue)
    title(Vue, { property: 'title', separator: ' « ' })
    nprogress(Vue)
    authorize(Vue)
  }
}
