import Vue from 'vue'
import Router from 'vue-router'
import routes from './routes'

Vue.use(Router)

export default new Router({
  mode: process.env.PUBLIC_URL ? 'history' : 'hash',
  base: process.env.PUBLIC_URL,
  routes: routes
})

// https://router.vuejs.org/zh-cn/advanced/scroll-behavior.html
// https://github.com/vuejs/vue-router/blob/next/examples/scroll-behavior/app.js
