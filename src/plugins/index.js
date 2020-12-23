/**
 * My plugins
 */

import axios from './axios'
import title from './title'
import services from './services'
import nprogress from './nprogress'
import authorize from './authorize'

export default {
  install (app, options) {
    axios(app)
    title(app)
    services(app)
    nprogress(app)
    authorize(app)
  }
}
