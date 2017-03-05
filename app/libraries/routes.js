/**
 * 路由表配置
 */
export default [
  {
    name: 'login',
    path: '/login',
    meta: { requiresAuth: false },
    component: require('../views/login')
  },
  {
    name: 'main',
    path: '/',
    meta: { requiresAuth: true },
    component: require('../views/main'),
    children: [
      {
        name: 'default',
        path: '',
        meta: { requiresAuth: true },
        redirect: { name: 'dashboard' }
      },
      {
        name: 'dashboard',
        path: 'dashboard',
        meta: { requiresAuth: true },
        component: () => System.import('../views/dashboard')
      },
      {
        name: 'update',
        path: 'update',
        meta: { requiresAuth: true },
        component: () => System.import('../views/update')
      },
      {
        name: 'posts',
        path: 'posts/:type?',
        meta: { requiresAuth: true },
        component: () => System.import('../views/posts')
      },
      {
        name: 'media',
        path: 'media',
        meta: { requiresAuth: true },
        component: () => System.import('../views/media')
      },
      {
        name: 'users',
        path: 'users',
        meta: { requiresAuth: true },
        component: () => System.import('../views/users')
      },
      {
        name: 'comments',
        path: 'comments',
        meta: { requiresAuth: true },
        component: () => System.import('../views/comments')
      },
      {
        name: 'themes',
        path: 'themes',
        meta: { requiresAuth: true },
        component: () => System.import('../views/themes')
      },
      {
        name: 'plugins',
        path: 'plugins',
        meta: { requiresAuth: true },
        component: () => System.import('../views/plugins')
      },
      {
        name: 'tools',
        path: 'tools',
        meta: { requiresAuth: true },
        component: () => System.import('../views/tools')
      },
      {
        name: 'options',
        path: 'options',
        meta: { requiresAuth: true },
        component: () => System.import('../views/options')
      },
      {
        name: 'about',
        path: 'about',
        meta: { requiresAuth: true },
        component: () => System.import('../views/about')
      },
      // ## demo views
      {
        name: 'demo',
        path: 'demo',
        meta: { requiresAuth: false },
        component: () => System.import('../views/demo/demo')
      },
      {
        name: 'components',
        path: 'components',
        meta: { requiresAuth: false },
        component: () => System.import('../views/demo/components')
      },
      {
        name: 'vuex',
        path: 'vuex',
        meta: { requiresAuth: false },
        component: () => System.import('../views/demo/vuex')
      },
      {
        name: 'proxy',
        path: 'demo/proxy',
        meta: { requiresAuth: false },
        component: () => System.import('../views/demo/proxy')
      },
      {
        name: 'parameter',
        path: 'demo/:name',
        meta: { requiresAuth: false },
        component: () => System.import('../views/demo/parameter')
      }
    ]
  },
  // ## not found
  {
    name: '404',
    path: '*',
    meta: { requiresAuth: false },
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
