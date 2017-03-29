import demo from './demo-routes'

export default [
  // - Dashboard
  {
    name: 'dashboard',
    path: '',
    meta: { requiresAuth: true },
    component: resolve => require.ensure([], () => resolve(require('views/main/index')), 'dashboard')
  },
  {
    name: 'update',
    path: 'update',
    meta: { requiresAuth: true },
    component: resolve => require.ensure([], () => resolve(require('views/main/update')), 'update')
  },
  {
    name: 'about',
    path: 'about',
    meta: { requiresAuth: true },
    component: resolve => require.ensure([], () => resolve(require('views/main/about')), 'about')
  },
  {
    name: 'profile',
    path: 'profile',
    meta: { requiresAuth: true },
    component: resolve => require.ensure([], () => resolve(require('views/main/profile')), 'users')
  },
  // - Posts
  {
    name: 'posts',
    path: 'posts/:type',
    meta: { requiresAuth: true },
    component: resolve => require.ensure([], () => resolve(require('views/main/posts')), 'posts')
  },
  {
    name: 'new',
    path: 'new/:type',
    meta: { requiresAuth: true },
    component: resolve => require.ensure([], () => resolve(require('views/main/new')), 'posts')
  },
  {
    name: 'edit',
    path: 'edit/:type/:slug?',
    meta: { requiresAuth: true },
    component: resolve => require.ensure([], () => resolve(require('views/main/edit')), 'posts')
  },
  // - Media
  {
    name: 'media',
    path: 'media',
    meta: { requiresAuth: true },
    component: resolve => require.ensure([], () => resolve(require('views/main/media')), 'media')
  },
  {
    name: 'upload',
    path: 'upload',
    meta: { requiresAuth: true },
    component: resolve => require.ensure([], () => resolve(require('views/main/upload')), 'upload')
  },
  // - Terms
  {
    name: 'terms',
    path: 'terms/:type',
    meta: { requiresAuth: true },
    component: resolve => require.ensure([], () => resolve(require('views/main/terms')), 'terms')
  },
  // - Users
  {
    name: 'users',
    path: 'users',
    meta: { requiresAuth: true },
    component: resolve => require.ensure([], () => resolve(require('views/main/users')), 'users')
  },
  {
    name: 'roles',
    path: 'roles',
    meta: { requiresAuth: true },
    component: resolve => require.ensure([], () => resolve(require('views/main/roles')), 'users')
  },
  {
    name: 'permissions',
    path: 'permissions',
    meta: { requiresAuth: true },
    component: resolve => require.ensure([], () => resolve(require('views/main/permissions')), 'users')
  },
  // - Comments
  {
    name: 'comments',
    path: 'comments',
    meta: { requiresAuth: true },
    component: resolve => require.ensure([], () => resolve(require('views/main/comments')), 'comments')
  },
  // - Appearances
  {
    name: 'themes',
    path: 'themes',
    meta: { requiresAuth: true },
    component: resolve => require.ensure([], () => resolve(require('views/main/themes')), 'appearances')
  },
  {
    name: 'customize',
    path: 'customize',
    meta: { requiresAuth: true },
    component: resolve => require.ensure([], () => resolve(require('views/main/customize')), 'appearances')
  },
  {
    name: 'widgets',
    path: 'widgets',
    meta: { requiresAuth: true },
    component: resolve => require.ensure([], () => resolve(require('views/main/widgets')), 'appearances')
  },
  {
    name: 'navigation',
    path: 'navigation',
    meta: { requiresAuth: true },
    component: resolve => require.ensure([], () => resolve(require('views/main/navigation')), 'appearances')
  },
  // - Plugins
  {
    name: 'plugins',
    path: 'plugins',
    meta: { requiresAuth: true },
    component: resolve => require.ensure([], () => resolve(require('views/main/plugins')), 'plugins')
  },
  // - Tools
  {
    name: 'install',
    path: 'install/:type',
    meta: { requiresAuth: true },
    component: resolve => require.ensure([], () => resolve(require('views/main/install')), 'plugins')
  },
  {
    name: 'tools',
    path: 'tools',
    meta: { requiresAuth: true },
    component: resolve => require.ensure([], () => resolve(require('views/main/tools')), 'tools')
  },
  {
    name: 'import',
    path: 'import',
    meta: { requiresAuth: true },
    component: resolve => require.ensure([], () => resolve(require('views/main/import')), 'tools')
  },
  {
    name: 'export',
    path: 'export',
    meta: { requiresAuth: true },
    component: resolve => require.ensure([], () => resolve(require('views/main/export')), 'tools')
  },
  // - Options
  {
    name: 'options',
    path: 'options/:type',
    meta: { requiresAuth: true },
    component: resolve => require.ensure([], () => resolve(require('views/main/options')), 'options')
  }
].concat(demo)

// // - Default
// {
//   name: 'default',
//   path: '',
//   meta: { requiresAuth: true },
//   redirect: { name: 'dashboard' }
// },
