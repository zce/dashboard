import { createI18n } from 'vue-i18n'

// https://kazupon.github.io/vue-i18n/dynamic.html
export default createI18n({
  locale: 'en',
  messages: {
    en: require('./locales/en'),
    cn: require('./locales/cn'),
    ja: require('./locales/ja')
  }
})
