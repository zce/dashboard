export default [
  // - Dashboard
  {
    name: 'home',
    path: '/',
    meta: { requireAuth: true },
    component: () => import(/* webpackChunkName: 'home' */ '../views/home')
  },
  {
    name: 'update',
    path: '/update',
    meta: { requireAuth: true },
    component: () => import(/* webpackChunkName: 'update' */ '../views/update')
  },
  {
    name: 'about',
    path: '/about',
    meta: { requireAuth: true },
    component: () => import(/* webpackChunkName: 'about' */ '../views/about')
  },
  {
    name: 'profile',
    path: '/profile',
    meta: { requireAuth: true },
    component: () => import(/* webpackChunkName: 'users' */ '../views/profile')
  },
  // - Posts
  {
    name: 'posts',
    path: '/posts/:type',
    meta: { requireAuth: true },
    component: () => import(/* webpackChunkName: 'posts' */ '../views/posts')
  },
  {
    name: 'new',
    path: '/new/:type',
    meta: { requireAuth: true },
    component: () => import(/* webpackChunkName: 'posts' */ '../views/new')
  },
  {
    name: 'edit',
    path: '/edit/:type/:slug?',
    meta: { requireAuth: true },
    component: () => import(/* webpackChunkName: 'posts' */ '../views/edit')
  },
  // - Media
  {
    name: 'media',
    path: '/media',
    meta: { requireAuth: true },
    component: () => import(/* webpackChunkName: 'media' */ '../views/media')
  },
  {
    name: 'upload',
    path: '/upload',
    meta: { requireAuth: true },
    component: () => import(/* webpackChunkName: 'upload' */ '../views/upload')
  },
  // - Terms
  {
    name: 'terms',
    path: '/terms/:type',
    meta: { requireAuth: true },
    component: () => import(/* webpackChunkName: 'terms' */ '../views/terms')
  },
  // - Users
  {
    name: 'users',
    path: '/users/:page?',
    meta: { requireAuth: true },
    component: () => import(/* webpackChunkName: 'users' */ '../views/users')
  },
  {
    name: 'roles',
    path: '/roles',
    meta: { requireAuth: true },
    component: () => import(/* webpackChunkName: 'users' */ '../views/roles')
  },
  {
    name: 'permissions',
    path: '/permissions',
    meta: { requireAuth: true },
    component: () => import(/* webpackChunkName: 'users' */ '../views/permissions')
  },
  // - Comments
  {
    name: 'comments',
    path: '/comments',
    meta: { requireAuth: true },
    component: () => import(/* webpackChunkName: 'comments' */ '../views/comments')
  },
  // - Appearances
  {
    name: 'themes',
    path: '/themes',
    meta: { requireAuth: true },
    component: () => import(/* webpackChunkName: 'appearances' */ '../views/themes')
  },
  {
    name: 'customize',
    path: '/customize',
    meta: { requireAuth: true },
    component: () => import(/* webpackChunkName: 'appearances' */ '../views/customize')
  },
  {
    name: 'widgets',
    path: '/widgets',
    meta: { requireAuth: true },
    component: () => import(/* webpackChunkName: 'appearances' */ '../views/widgets')
  },
  {
    name: 'navigation',
    path: '/navigation',
    meta: { requireAuth: true },
    component: () => import(/* webpackChunkName: 'appearances' */ '../views/navigation')
  },
  // - Plugins
  {
    name: 'plugins',
    path: '/plugins',
    meta: { requireAuth: true },
    component: () => import(/* webpackChunkName: 'plugins' */ '../views/plugins')
  },
  // - Tools
  {
    name: 'install',
    path: '/install/:type',
    meta: { requireAuth: true },
    component: () => import(/* webpackChunkName: 'plugins' */ '../views/install')
  },
  {
    name: 'tools',
    path: '/tools',
    meta: { requireAuth: true },
    component: () => import(/* webpackChunkName: 'tools' */ '../views/tools')
  },
  {
    name: 'import',
    path: '/import',
    meta: { requireAuth: true },
    component: () => import(/* webpackChunkName: 'tools' */ '../views/import')
  },
  {
    name: 'export',
    path: '/export',
    meta: { requireAuth: true },
    component: () => import(/* webpackChunkName: 'tools' */ '../views/export')
  },
  // - Options
  {
    name: 'options',
    path: '/options/:type',
    meta: { requireAuth: true },
    component: () => import(/* webpackChunkName: 'options' */ '../views/options')
  }
]

// // - Default
// {
//   name: 'default',
//   path: '/',
//   meta: { requireAuth: true },
//   redirect: { name: 'home' }
// },
