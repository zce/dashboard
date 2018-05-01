import demo from './demo-routes'

export default [
  // - Dashboard
  {
    name: 'dashboard',
    path: '',
    meta: { requiresAuth: true },
    component: () => import(/* webpackChunkName: 'dashboard' */ '../views/main/index')
  },
  {
    name: 'update',
    path: 'update',
    meta: { requiresAuth: true },
    component: () => import(/* webpackChunkName: 'update' */ '../views/main/update')
  },
  {
    name: 'about',
    path: 'about',
    meta: { requiresAuth: true },
    component: () => import(/* webpackChunkName: 'about' */ '../views/main/about')
  },
  {
    name: 'profile',
    path: 'profile',
    meta: { requiresAuth: true },
    component: () => import(/* webpackChunkName: 'users' */ '../views/main/profile')
  },
  // - Posts
  {
    name: 'posts',
    path: 'posts/:type',
    meta: { requiresAuth: true },
    component: () => import(/* webpackChunkName: 'posts' */ '../views/main/posts')
  },
  {
    name: 'new',
    path: 'new/:type',
    meta: { requiresAuth: true },
    component: () => import(/* webpackChunkName: 'posts' */ '../views/main/new')
  },
  {
    name: 'edit',
    path: 'edit/:type/:slug?',
    meta: { requiresAuth: true },
    component: () => import(/* webpackChunkName: 'posts' */ '../views/main/edit')
  },
  // - Media
  {
    name: 'media',
    path: 'media',
    meta: { requiresAuth: true },
    component: () => import(/* webpackChunkName: 'media' */ '../views/main/media')
  },
  {
    name: 'upload',
    path: 'upload',
    meta: { requiresAuth: true },
    component: () => import(/* webpackChunkName: 'upload' */ '../views/main/upload')
  },
  // - Terms
  {
    name: 'terms',
    path: 'terms/:type',
    meta: { requiresAuth: true },
    component: () => import(/* webpackChunkName: 'terms' */ '../views/main/terms')
  },
  // - Users
  {
    name: 'users',
    path: 'users/:page?',
    meta: { requiresAuth: true },
    component: () => import(/* webpackChunkName: 'users' */ '../views/main/users')
  },
  {
    name: 'roles',
    path: 'roles',
    meta: { requiresAuth: true },
    component: () => import(/* webpackChunkName: 'users' */ '../views/main/roles')
  },
  {
    name: 'permissions',
    path: 'permissions',
    meta: { requiresAuth: true },
    component: () => import(/* webpackChunkName: 'users' */ '../views/main/permissions')
  },
  // - Comments
  {
    name: 'comments',
    path: 'comments',
    meta: { requiresAuth: true },
    component: () => import(/* webpackChunkName: 'comments' */ '../views/main/comments')
  },
  // - Appearances
  {
    name: 'themes',
    path: 'themes',
    meta: { requiresAuth: true },
    component: () => import(/* webpackChunkName: 'appearances' */ '../views/main/themes')
  },
  {
    name: 'customize',
    path: 'customize',
    meta: { requiresAuth: true },
    component: () => import(/* webpackChunkName: 'appearances' */ '../views/main/customize')
  },
  {
    name: 'widgets',
    path: 'widgets',
    meta: { requiresAuth: true },
    component: () => import(/* webpackChunkName: 'appearances' */ '../views/main/widgets')
  },
  {
    name: 'navigation',
    path: 'navigation',
    meta: { requiresAuth: true },
    component: () => import(/* webpackChunkName: 'appearances' */ '../views/main/navigation')
  },
  // - Plugins
  {
    name: 'plugins',
    path: 'plugins',
    meta: { requiresAuth: true },
    component: () => import(/* webpackChunkName: 'plugins' */ '../views/main/plugins')
  },
  // - Tools
  {
    name: 'install',
    path: 'install/:type',
    meta: { requiresAuth: true },
    component: () => import(/* webpackChunkName: 'plugins' */ '../views/main/install')
  },
  {
    name: 'tools',
    path: 'tools',
    meta: { requiresAuth: true },
    component: () => import(/* webpackChunkName: 'tools' */ '../views/main/tools')
  },
  {
    name: 'import',
    path: 'import',
    meta: { requiresAuth: true },
    component: () => import(/* webpackChunkName: 'tools' */ '../views/main/import')
  },
  {
    name: 'export',
    path: 'export',
    meta: { requiresAuth: true },
    component: () => import(/* webpackChunkName: 'tools' */ '../views/main/export')
  },
  // - Options
  {
    name: 'options',
    path: 'options/:type',
    meta: { requiresAuth: true },
    component: () => import(/* webpackChunkName: 'options' */ '../views/main/options')
  }
].concat(demo)

// // - Default
// {
//   name: 'default',
//   path: '',
//   meta: { requiresAuth: true },
//   redirect: { name: 'dashboard' }
// },
