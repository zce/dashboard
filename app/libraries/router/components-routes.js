// component views
export default [
  {
    name: 'components',
    path: 'components',
    meta: { requiresAuth: false },
    component: resolve => require.ensure([], () => resolve(require('views/demo/components/index')), 'components')
  },
  {
    name: 'components-icons',
    path: 'components/icons',
    meta: { requiresAuth: false },
    component: resolve => require.ensure([], () => resolve(require('views/demo/components/icons')), 'components')
  },
  {
    name: 'components-button',
    path: 'components/button',
    meta: { requiresAuth: false },
    component: resolve => require.ensure([], () => resolve(require('views/demo/components/button')), 'components')
  }
]
