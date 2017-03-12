import demo from './demo-routes'

export default [
  // {
  //   name: 'default',
  //   path: '',
  //   meta: { requiresAuth: true },
  //   redirect: { name: 'dashboard' }
  // },
  {
    name: 'dashboard',
    path: '',
    meta: { requiresAuth: true },
    component: resolve => require.ensure([], () => resolve(require('views/main/dashboard')), 'dashboard')
  },
  {
    name: 'update',
    path: 'update',
    meta: { requiresAuth: true },
    component: resolve => require.ensure([], () => resolve(require('views/main/update')), 'update')
  },
  {
    name: 'posts',
    path: 'posts/:type?',
    meta: { requiresAuth: true },
    component: resolve => require.ensure([], () => resolve(require('views/main/posts')), 'posts')
  },
  {
    name: 'media',
    path: 'media',
    meta: { requiresAuth: true },
    component: resolve => require.ensure([], () => resolve(require('views/main/media')), 'media')
  },
  {
    name: 'users',
    path: 'users',
    meta: { requiresAuth: true },
    component: resolve => require.ensure([], () => resolve(require('views/main/users')), 'users')
  },
  {
    name: 'comments',
    path: 'comments',
    meta: { requiresAuth: true },
    component: resolve => require.ensure([], () => resolve(require('views/main/comments')), 'comments')
  },
  {
    name: 'themes',
    path: 'themes',
    meta: { requiresAuth: true },
    component: resolve => require.ensure([], () => resolve(require('views/main/themes')), 'themes')
  },
  {
    name: 'plugins',
    path: 'plugins',
    meta: { requiresAuth: true },
    component: resolve => require.ensure([], () => resolve(require('views/main/plugins')), 'plugins')
  },
  {
    name: 'tools',
    path: 'tools',
    meta: { requiresAuth: true },
    component: resolve => require.ensure([], () => resolve(require('views/main/tools')), 'tools')
  },
  {
    name: 'options',
    path: 'options',
    meta: { requiresAuth: true },
    component: resolve => require.ensure([], () => resolve(require('views/main/options')), 'options')
  },
  {
    name: 'about',
    path: 'about',
    meta: { requiresAuth: true },
    component: resolve => require.ensure([], () => resolve(require('views/main/about')), 'about')
  }
].concat(demo)
