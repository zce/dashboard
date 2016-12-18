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
    name: 'post',
    path: '/post',
    component: require('../pages/post')
  },
  {
    name: 'media',
    path: '/media',
    component: require('../pages/media')
  },
  {
    name: 'user',
    path: '/user',
    component: require('../pages/user')
  },
  {
    name: 'comment',
    path: '/comment',
    component: require('../pages/comment')
  },
  {
    name: 'theme',
    path: '/theme',
    component: require('../pages/theme')
  },
  {
    name: 'plugin',
    path: '/plugin',
    component: require('../pages/plugin')
  },
  {
    name: 'tool',
    path: '/tool',
    component: require('../pages/tool')
  },
  {
    name: 'setting',
    path: '/setting',
    component: require('../pages/setting')
  },
  {
    name: 'about',
    path: '/about',
    component: () => System.import('../pages/about')
  },
  // demo pages
  {
    name: 'component',
    path: '/component',
    component: () => System.import('../pages/demo/component')
  },
  {
    name: 'option',
    path: '/option',
    component: () => System.import('../pages/demo/option')
  },
  {
    name: 'demo',
    path: '/demo',
    component: () => System.import('../pages/demo/demo')
  },
  {
    name: 'proxy',
    path: '/proxy',
    component: () => System.import('../pages/demo/proxy')
  },
  {
    name: 'param',
    path: '/param',
    component: () => System.import('../pages/demo/param')
  },
  // not found
  {
    name: '404',
    path: '*',
    component: () => System.import('../pages/404')
  }
]
