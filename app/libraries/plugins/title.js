/**
 * Change title on route
 */
import router from '../router'

export default (Vue, options) => {
  let items

  router.afterEach(route => {
    items = route.matched
      .map(item => item.components.default[options.property] || item.components.default.name)
      .reverse()
    document.title = items.join(options.separator)
  })

  // partial
  Object.defineProperties(Vue.prototype, {
    $title: {
      get: () => (title, fullname) => {
        if (fullname) {
          document.title = title
        } else {
          items[0] = title
          document.title = items.join(options.separator)
        }
      }
    }
  })
}
