export default [
  // - Dashboard
  {
    name: 'dashboard',
    path: '',
    meta: { requiresAuth: true },
    component: () => import(/* webpackChunkName: 'dashboard' */ '../views/index')
  },
  {
    name: 'update',
    path: 'update',
    meta: { requiresAuth: true },
    component: () => import(/* webpackChunkName: 'update' */ '../views/update')
  },
  {
    name: 'about',
    path: 'about',
    meta: { requiresAuth: true },
    component: () => import(/* webpackChunkName: 'about' */ '../views/about')
  },
  {
    name: 'profile',
    path: 'profile',
    meta: { requiresAuth: true },
    component: () => import(/* webpackChunkName: 'users' */ '../views/profile')
  },
  // - Posts
  {
    name: 'posts',
    path: 'posts/:type',
    meta: { requiresAuth: true },
    component: () => import(/* webpackChunkName: 'posts' */ '../views/posts')
  },
  {
    name: 'new',
    path: 'new/:type',
    meta: { requiresAuth: true },
    component: () => import(/* webpackChunkName: 'posts' */ '../views/new')
  },
  {
    name: 'edit',
    path: 'edit/:type/:slug?',
    meta: { requiresAuth: true },
    component: () => import(/* webpackChunkName: 'posts' */ '../views/edit')
  },
  // - Media
  {
    name: 'media',
    path: 'media',
    meta: { requiresAuth: true },
    component: () => import(/* webpackChunkName: 'media' */ '../views/media')
  },
  {
    name: 'upload',
    path: 'upload',
    meta: { requiresAuth: true },
    component: () => import(/* webpackChunkName: 'upload' */ '../views/upload')
  },
  // - Terms
  {
    name: 'terms',
    path: 'terms/:type',
    meta: { requiresAuth: true },
    component: () => import(/* webpackChunkName: 'terms' */ '../views/terms')
  },
  // - Users
  {
    name: 'users',
    path: 'users/:page?',
    meta: { requiresAuth: true },
    component: () => import(/* webpackChunkName: 'users' */ '../views/users')
  },
  {
    name: 'roles',
    path: 'roles',
    meta: { requiresAuth: true },
    component: () => import(/* webpackChunkName: 'users' */ '../views/roles')
  },
  {
    name: 'permissions',
    path: 'permissions',
    meta: { requiresAuth: true },
    component: () => import(/* webpackChunkName: 'users' */ '../views/permissions')
  },
  // - Comments
  {
    name: 'comments',
    path: 'comments',
    meta: { requiresAuth: true },
    component: () => import(/* webpackChunkName: 'comments' */ '../views/comments')
  },
  // - Appearances
  {
    name: 'themes',
    path: 'themes',
    meta: { requiresAuth: true },
    component: () => import(/* webpackChunkName: 'appearances' */ '../views/themes')
  },
  {
    name: 'customize',
    path: 'customize',
    meta: { requiresAuth: true },
    component: () => import(/* webpackChunkName: 'appearances' */ '../views/customize')
  },
  {
    name: 'widgets',
    path: 'widgets',
    meta: { requiresAuth: true },
    component: () => import(/* webpackChunkName: 'appearances' */ '../views/widgets')
  },
  {
    name: 'navigation',
    path: 'navigation',
    meta: { requiresAuth: true },
    component: () => import(/* webpackChunkName: 'appearances' */ '../views/navigation')
  },
  // - Plugins
  {
    name: 'plugins',
    path: 'plugins',
    meta: { requiresAuth: true },
    component: () => import(/* webpackChunkName: 'plugins' */ '../views/plugins')
  },
  // - Tools
  {
    name: 'install',
    path: 'install/:type',
    meta: { requiresAuth: true },
    component: () => import(/* webpackChunkName: 'plugins' */ '../views/install')
  },
  {
    name: 'tools',
    path: 'tools',
    meta: { requiresAuth: true },
    component: () => import(/* webpackChunkName: 'tools' */ '../views/tools')
  },
  {
    name: 'import',
    path: 'import',
    meta: { requiresAuth: true },
    component: () => import(/* webpackChunkName: 'tools' */ '../views/import')
  },
  {
    name: 'export',
    path: 'export',
    meta: { requiresAuth: true },
    component: () => import(/* webpackChunkName: 'tools' */ '../views/export')
  },
  // - Options
  {
    name: 'options',
    path: 'options/:type',
    meta: { requiresAuth: true },
    component: () => import(/* webpackChunkName: 'options' */ '../views/options')
  }
]

// // - Default
// {
//   name: 'default',
//   path: '',
//   meta: { requiresAuth: true },
//   redirect: { name: 'dashboard' }
// },
