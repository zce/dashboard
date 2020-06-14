import Vue from 'vue'
import Router from 'vue-router'
import routes from './routes'

Vue.use(Router)

// https://router.vuejs.org/zh-cn/advanced/scroll-behavior.html
// https://github.com/vuejs/vue-router/blob/next/examples/scroll-behavior/app.js

const router = new Router({
  mode: process.env.BASE_URL ? 'history' : 'hash',
  base: process.env.BASE_URL,
  routes
})

// https://github.com/vuejs/vue-router/issues/2881#issuecomment-520554378
const originalPush = router.push
router.push = function push (location, onResolve, onReject) {
  // if (onResolve || onReject) return originalPush.call(this, location, onResolve, onReject)
  return originalPush.call(this, location).catch(err => err)
}

export default router
