export default [
  // ## demo views
  {
    name: 'demo',
    path: '/demo',
    meta: { requireAuth: false },
    component: () => import(/* webpackChunkName: 'demo' */ '../views/demo/index')
  },
  {
    name: 'demo-data',
    path: '/demo/data',
    meta: { requireAuth: false },
    component: () => import(/* webpackChunkName: 'demo' */ '../views/demo/data')
  },
  {
    name: 'demo-vuex',
    path: '/demo/vuex',
    meta: { requireAuth: false },
    component: () => import(/* webpackChunkName: 'demo' */ '../views/demo/vuex')
  },
  {
    name: 'demo-i18n',
    path: '/demo/i18n',
    meta: { requireAuth: false },
    component: () => import(/* webpackChunkName: 'demo' */ '../views/demo/i18n')
  },
  {
    name: 'demo-proxy',
    path: '/demo/proxy',
    meta: { requireAuth: false },
    component: () => import(/* webpackChunkName: 'demo' */ '../views/demo/proxy')
  },
  {
    name: 'demo-cors',
    path: '/demo/cors',
    meta: { requireAuth: false },
    component: () => import(/* webpackChunkName: 'demo' */ '../views/demo/cors')
  },
  {
    name: 'demo-params',
    path: '/demo/:name',
    meta: { requireAuth: false },
    component: () => import(/* webpackChunkName: 'demo' */ '../views/demo/params')
  },
  // ## component views
  {
    name: 'components',
    path: '/components',
    meta: { requireAuth: false },
    component: () => import(/* webpackChunkName: 'components' */ '../views/demo/components/index')
  },
  {
    name: 'components-icons',
    path: '/components/icons',
    meta: { requireAuth: false },
    component: () => import(/* webpackChunkName: 'components' */ '../views/demo/components/icons')
  },
  {
    name: 'components-button',
    path: '/components/button',
    meta: { requireAuth: false },
    component: () => import(/* webpackChunkName: 'components' */ '../views/demo/components/button')
  },
  {
    name: 'components-table',
    path: '/components/table',
    meta: { requireAuth: false },
    component: () => import(/* webpackChunkName: 'components' */ '../views/demo/components/table')
  }
]
