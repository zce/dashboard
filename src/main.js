import { createApp } from 'vue'
import element from 'element-plus'
import App from './app.vue'
import i18n from './i18n'
import store from './store'
import router from './router'
import plugins from './plugins'

// global styles
import './style.scss'

// Create root app
const app = createApp(App)

// global config
// app.config.debug = import.meta.env.DEV
// app.config.silent = import.meta.env.PROD
// app.config.productionTip = false

// plugins
app.use(i18n)
app.use(store)
app.use(router)
app.use(element)
app.use(plugins)

// Mount to `#app` element
app.mount('#app')
