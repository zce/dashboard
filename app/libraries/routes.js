/**
 * 路由表
 */
export default [
  {
    name: 'default',
    path: '/',
    redirect: { name: 'dashboard' }
  },
  {
    name: 'dashboard',
    path: '/dashboard',
    component: require('../views/dashboard')
  },
  {
    name: 'posts',
    path: '/posts/:type?',
    component: require('../views/posts')
  },
  {
    name: 'media',
    path: '/media',
    component: require('../views/media')
  },
  {
    name: 'users',
    path: '/users',
    component: require('../views/users')
  },
  {
    name: 'comments',
    path: '/comments',
    component: require('../views/comments')
  },
  {
    name: 'themes',
    path: '/themes',
    component: require('../views/themes')
  },
  {
    name: 'plugins',
    path: '/plugins',
    component: require('../views/plugins')
  },
  {
    name: 'tools',
    path: '/tools',
    component: require('../views/tools')
  },
  {
    name: 'options',
    path: '/options',
    component: require('../views/options')
  },
  {
    name: 'about',
    path: '/about',
    component: () => System.import('../views/about')
  },
  // ## demo views
  {
    name: 'demo',
    path: '/demo',
    component: () => System.import('../views/demo/demo')
  },
  {
    name: 'components',
    path: '/components',
    component: () => System.import('../views/demo/components')
  },
  {
    name: 'proxy',
    path: '/demo/proxy',
    component: () => System.import('../views/demo/proxy')
  },
  {
    name: 'parameter',
    path: '/demo/:name',
    component: () => System.import('../views/demo/parameter')
  },
  // ## not found
  {
    name: '404',
    path: '*',
    component: () => System.import('../views/404')
  }
]

// // 同步加载所有组件
// const views = [
//   require('../views/component'),
//   require('../views/dashboard'),
//   require('../views/about'),
//   require('../views/404')
// ]
//
// const defaultPage = views.find(p => p.default) || { path: '/' }
//
// const defaults = [{ name: 'default', path: '/', redirect: defaultPage.path }]
//
// export default defaults.concat(views.map(page => ({ name: page.name, path: page.path, component: page })))

// 异步分块加载所有组件
// https://github.com/wengang/vue-router-async-components/blob/master/src/main.js#L26
// TODO: code splite group
// https://github.com/webpack/webpack/issues/2369
// component: resolve => require.ensure([], () => resolve(require('../views/component')), 'component')
// component: () => System.import('../views/component')
// component: require('../views/dashboard')
