/**
 * Change title on route
 */

export default (Vue, options) => {
  let items

  Vue.router.afterEach(route => {
    items = route.matched
      .map(item => item.components.default[options.property] || item.components.default.name)
      .reverse()
    document.title = items.join(options.separator)
  })

  // partial
  Vue.prototype.$title = function (title, fullname) {
    if (fullname) {
      document.title = title
    } else {
      items[0] = title
      document.title = items.join(options.separator)
    }
  }
}
