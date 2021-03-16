/**
 * Change title when route
 * TODO: title case
 */
import router from '../router'
import store from '../store'

const property = 'title'
const separator = ' « '

export default app => {
  router.afterEach(route => {
    const current = route.matched[route.matched.length - 1].components.default
    const title = current[property] || current.name
    const items = [import.meta.env.VITE_TITLE]
    title && items.unshift(title)

    // change title
    store.dispatch('changeTitle', items.join(separator).toLocaleUpperCase())

    // console.log(route.matched)
    // const items = route.matched
    //   .map(({ components }) => {
    //     const title = (components.default[property] || components.default.name)
    //     return title && title.toLocaleUpperCase()
    //   })
    //   .filter(t => t && t.trim())
    //   .reverse()
    // document.title = [...items, import.meta.env.VITE_TITLE].join(separator)
  })

  Object.defineProperties(app.config.globalProperties, {
    $title: {
      get: () => {
        return store.getters.title
      },
      set: value => {
        store.dispatch('changeTitle', value.toLocaleUpperCase())
      }
    }
  })
}
