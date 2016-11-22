// // 同步加载所有组件
// const pages = [
//   require('../pages/component'),
//   require('../pages/dashboard'),
//   require('../pages/about'),
//   require('../pages/404')
// ]
//
// const defaultPage = pages.find(p => p.default) || { path: '/' }
//
// const defaults = [{ name: 'default', path: '/', redirect: defaultPage.path }]
//
// export default defaults.concat(pages.map(page => ({ name: page.name, path: page.path, component: page })))

// 异步分块加载所有组件
// https://github.com/wengang/vue-router-async-components/blob/master/src/main.js#L26
// TODO: code splite group
// https://github.com/webpack/webpack/issues/2369
// component: resolve => require.ensure([], () => resolve(require('../pages/component')), 'component')
// component: () => System.import('../pages/component')
// component: require('../pages/dashboard')

export default [
  {
    name: 'default',
    path: '/',
    redirect: { name: 'dashboard' }
  },
  {
    name: 'dashboard',
    path: '/dashboard',
    component: require('../pages/dashboard')
  },
  {
    name: 'component',
    path: '/component',
    component: () => System.import('../pages/component')
  },
  {
    name: 'option',
    path: '/option',
    component: () => System.import('../pages/option')
  },
  {
    name: 'about',
    path: '/about',
    component: () => System.import('../pages/about')
  },
  {
    name: 'param',
    path: '/param',
    component: () => System.import('../pages/param')
  },
  {
    name: 'demo',
    path: '/demo',
    component: () => System.import('../pages/demo')
  },
  {
    name: '404',
    path: '*',
    component: () => System.import('../pages/404')
  }
]
