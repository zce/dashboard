import Vue from 'vue'
import I18n from 'vue-i18n'

Vue.use(I18n)

// https://kazupon.github.io/vue-i18n/dynamic.html
const locales = {
  'en-US': require('../assets/locales/en-US.json'),
  'zh-CN': require('../assets/locales/zh-CN.json')
}

Object.keys(locales).forEach(item => Vue.locale(item, locales[item]))

Vue.config.lang = 'zh-CN'
Vue.config.fallbackLang = 'en-US'
