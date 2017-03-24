import mainRoutes from './main-routes'

/**
 * 路由表配置
 */
export default [
  // ## login page
  {
    name: 'login',
    path: '/login',
    meta: { requiresAuth: false },
    component: resolve => require.ensure([], () => resolve(require('views/login')), 'login')
  },
  // ## main page
  {
    path: '/',
    meta: { requiresAuth: true },
    component: resolve => require.ensure([], () => resolve(require('views/layout')), 'common'),
    children: mainRoutes
  },
  // ## not found page
  {
    name: 'not-found',
    path: '*',
    meta: { requiresAuth: false },
    component: resolve => require.ensure([], () => resolve(require('views/404')), 'common')
  }
]
