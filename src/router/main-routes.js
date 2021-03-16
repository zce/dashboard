export default [
  // - Dashboard
  {
    name: 'home',
    path: '/',
    meta: { requireAuth: true },
    component: () => import(/* webpackChunkName: 'home' */ '../views/home.vue')
  },
  {
    name: 'update',
    path: '/update',
    meta: { requireAuth: true },
    component: () => import(/* webpackChunkName: 'update' */ '../views/update.vue')
  },
  {
    name: 'about',
    path: '/about',
    meta: { requireAuth: true },
    component: () => import(/* webpackChunkName: 'about' */ '../views/about.vue')
  },
  {
    name: 'profile',
    path: '/profile',
    meta: { requireAuth: true },
    component: () => import(/* webpackChunkName: 'users' */ '../views/profile.vue')
  },
  // - Posts
  {
    name: 'posts',
    path: '/posts/:type',
    meta: { requireAuth: true },
    component: () => import(/* webpackChunkName: 'posts' */ '../views/posts.vue')
  },
  {
    name: 'new',
    path: '/new/:type',
    meta: { requireAuth: true },
    component: () => import(/* webpackChunkName: 'posts' */ '../views/new.vue')
  },
  {
    name: 'edit',
    path: '/edit/:type/:slug?',
    meta: { requireAuth: true },
    component: () => import(/* webpackChunkName: 'posts' */ '../views/edit.vue')
  },
  // - Media
  {
    name: 'media',
    path: '/media',
    meta: { requireAuth: true },
    component: () => import(/* webpackChunkName: 'media' */ '../views/media.vue')
  },
  {
    name: 'upload',
    path: '/upload',
    meta: { requireAuth: true },
    component: () => import(/* webpackChunkName: 'upload' */ '../views/upload.vue')
  },
  // - Terms
  {
    name: 'terms',
    path: '/terms/:type',
    meta: { requireAuth: true },
    component: () => import(/* webpackChunkName: 'terms' */ '../views/terms.vue')
  },
  // - Users
  {
    name: 'users',
    path: '/users/:page?',
    meta: { requireAuth: true },
    component: () => import(/* webpackChunkName: 'users' */ '../views/users.vue')
  },
  {
    name: 'roles',
    path: '/roles',
    meta: { requireAuth: true },
    component: () => import(/* webpackChunkName: 'users' */ '../views/roles.vue')
  },
  {
    name: 'permissions',
    path: '/permissions',
    meta: { requireAuth: true },
    component: () => import(/* webpackChunkName: 'users' */ '../views/permissions.vue')
  },
  // - Comments
  {
    name: 'comments',
    path: '/comments',
    meta: { requireAuth: true },
    component: () => import(/* webpackChunkName: 'comments' */ '../views/comments.vue')
  },
  // - Appearances
  {
    name: 'themes',
    path: '/themes',
    meta: { requireAuth: true },
    component: () => import(/* webpackChunkName: 'appearances' */ '../views/themes.vue')
  },
  {
    name: 'customize',
    path: '/customize',
    meta: { requireAuth: true },
    component: () => import(/* webpackChunkName: 'appearances' */ '../views/customize.vue')
  },
  {
    name: 'widgets',
    path: '/widgets',
    meta: { requireAuth: true },
    component: () => import(/* webpackChunkName: 'appearances' */ '../views/widgets.vue')
  },
  {
    name: 'navigation',
    path: '/navigation',
    meta: { requireAuth: true },
    component: () => import(/* webpackChunkName: 'appearances' */ '../views/navigation.vue')
  },
  // - Plugins
  {
    name: 'plugins',
    path: '/plugins',
    meta: { requireAuth: true },
    component: () => import(/* webpackChunkName: 'plugins' */ '../views/plugins.vue')
  },
  // - Tools
  {
    name: 'install',
    path: '/install/:type',
    meta: { requireAuth: true },
    component: () => import(/* webpackChunkName: 'plugins' */ '../views/install.vue')
  },
  {
    name: 'tools',
    path: '/tools',
    meta: { requireAuth: true },
    component: () => import(/* webpackChunkName: 'tools' */ '../views/tools.vue')
  },
  {
    name: 'import',
    path: '/import',
    meta: { requireAuth: true },
    component: () => import(/* webpackChunkName: 'tools' */ '../views/import.vue')
  },
  {
    name: 'export',
    path: '/export',
    meta: { requireAuth: true },
    component: () => import(/* webpackChunkName: 'tools' */ '../views/export.vue')
  },
  // - Options
  {
    name: 'options',
    path: '/options/:type',
    meta: { requireAuth: true },
    component: () => import(/* webpackChunkName: 'options' */ '../views/options.vue')
  }
]

// // - Default
// {
//   name: 'default',
//   path: '/',
//   meta: { requireAuth: true },
//   redirect: { name: 'home' }
// },
