// business routes
import mainRoutes from './main-routes'
// demo routes
import demoRoutes from './demo-routes'

/**
 * 路由表配置
 */
export default [
  // ## login page
  {
    name: 'login',
    path: '/login',
    meta: { requireAuth: false },
    component: () => import(/* webpackChunkName: 'login' */ '../views/login.vue')
  },
  // ## main page
  {
    path: '/',
    meta: { requireAuth: true },
    component: () => import(/* webpackChunkName: 'common' */ '../views/layout.vue'),
    children: mainRoutes.concat(demoRoutes)
  },
  // ## not found page
  {
    name: 'not-found',
    path: '/*',
    meta: { requireAuth: false },
    component: () => import(/* webpackChunkName: 'common' */ '../views/error.vue')
  }
]
