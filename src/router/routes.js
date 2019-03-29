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
    meta: { requiresAuth: false },
    component: () => import(/* webpackChunkName: 'login' */ '../views/login')
  },
  // ## main page
  {
    path: '/',
    meta: { requiresAuth: true },
    component: () => import(/* webpackChunkName: 'common' */ '../views/layout'),
    children: mainRoutes.concat(demoRoutes)
  },
  // ## not found page
  {
    name: 'not-found',
    path: '*',
    meta: { requiresAuth: false },
    component: () => import(/* webpackChunkName: 'common' */ '../views/error')
  }
]
