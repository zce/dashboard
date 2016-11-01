const pages = [
  require('../pages/component'),
  require('../pages/dashboard'),
  require('../pages/about'),
  require('../pages/404')
]

const defaultPage = pages.find(p => p.default) || { path: '/' }

const defaults = [{ name: 'default', path: '/', redirect: defaultPage.path }]

export default defaults.concat(pages.map(page => ({ name: page.name, path: page.path, component: page })))
