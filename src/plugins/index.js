/**
 * My plugins
 */

import axios from './axios'
import title from './title'
import services from './services'
import nprogress from './nprogress'
import authorize from './authorize'

export default {
  install (Vue) {
    axios(Vue)
    title(Vue)
    services(Vue)
    nprogress(Vue)
    authorize(Vue)
  }
}
