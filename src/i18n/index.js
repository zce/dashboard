import Vue from 'vue'
import I18n from 'vue-i18n'

Vue.use(I18n)

// https://kazupon.github.io/vue-i18n/dynamic.html
export default new I18n({
  locale: 'en',
  messages: {
    'en': require('./locales/en'),
    'cn': require('./locales/cn'),
    'ja': require('./locales/ja')
  }
})
