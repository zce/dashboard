import Vue from 'vue'
import I18n from 'vue-i18n'

Vue.use(I18n)

// https://kazupon.github.io/vue-i18n/dynamic.html
export default new I18n({
  locale: 'zh-CN',
  messages: {
    // 'en-US': require('assets/locales/en-US'),
    'zh-CN': require('assets/locales/zh-CN')
  }
})
