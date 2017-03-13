import components from './components-routes'

export default [
  // ## demo views
  {
    name: 'demo',
    path: 'demo',
    meta: { requiresAuth: false },
    component: resolve => require.ensure([], () => resolve(require('views/demo/index')), 'demo')
  },
  {
    name: 'demo-data',
    path: 'demo/data',
    meta: { requiresAuth: false },
    component: resolve => require.ensure([], () => resolve(require('views/demo/data')), 'demo')
  },
  {
    name: 'demo-vuex',
    path: 'demo/vuex',
    meta: { requiresAuth: false },
    component: resolve => require.ensure([], () => resolve(require('views/demo/vuex')), 'demo')
  },
  {
    name: 'demo-i18n',
    path: 'demo/i18n',
    meta: { requiresAuth: false },
    component: resolve => require.ensure([], () => resolve(require('views/demo/i18n')), 'demo')
  },
  {
    name: 'demo-proxy',
    path: 'demo/proxy',
    meta: { requiresAuth: false },
    component: resolve => require.ensure([], () => resolve(require('views/demo/proxy')), 'demo')
  },
  {
    name: 'demo-jsonp',
    path: 'demo/jsonp',
    meta: { requiresAuth: false },
    component: resolve => require.ensure([], () => resolve(require('views/demo/jsonp')), 'demo')
  },
  {
    name: 'demo-params',
    path: 'demo/:name',
    meta: { requiresAuth: false },
    component: resolve => require.ensure([], () => resolve(require('views/demo/params')), 'demo')
  }
].concat(components)
