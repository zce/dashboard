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
export default [
  {
    name: 'default',
    path: '/',
    redirect: { name: 'dashboard' }
  },
  {
    name: 'component',
    path: '/component',
    component: resolve => require.ensure([], () => resolve(require('../pages/component')), 'component')
  },
  {
    name: 'dashboard',
    path: '/dashboard',
    component: resolve => require.ensure([], () => resolve(require('../pages/dashboard')), 'dashboard')
  },
  {
    name: 'about',
    path: '/about',
    component: resolve => require.ensure([], () => resolve(require('../pages/about')), 'about')
  },
  {
    name: '404',
    path: '*',
    component: resolve => require.ensure([], () => resolve(require('../pages/404')), '404')
  }
]
