/**
 * Change title on route
 * TODO: title case
 */
import router from '../router'
import store from '../store'

export default (Vue, options) => {
  let items

  router.afterEach(route => {
    items = route.matched
      .map(item => (item.components.default[options.property] || item.components.default.name).toUpperCase())
      .reverse()
    store.dispatch('changeTitle', items.join(options.separator))
  })

  // partial
  Object.defineProperties(Vue.prototype, {
    $title: {
      get: () => (title, fullname) => {
        if (fullname) {
          store.dispatch('changeTitle', title.toUpperCase())
        } else {
          items[0] = title.toUpperCase()
          store.dispatch('changeTitle', items.join(options.separator))
        }
      }
    }
  })
}
