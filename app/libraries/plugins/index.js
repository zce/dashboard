/**
 * My Vue.js plugin
 */

import axios from './axios'
import title from './title'
import nprogress from './nprogress'
import authorize from './authorize'

export default {
  install (Vue) {
    title(Vue, { property: 'title', separator: ' « ' })
    axios(Vue)
    nprogress(Vue)
    authorize(Vue)
  }
}
