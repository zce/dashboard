/**
 * Override convention configuration
 * https://cli.vuejs.org/config/
 */

/** @type {import('@vue/cli-service').ProjectOptions} */
module.exports = {
  publicPath: '', // for relative path
  assetsDir: 'assets',
  lintOnSave: process.env.NODE_ENV !== 'production',
  productionSourceMap: false,
  css: {
    sourceMap: process.env.NODE_ENV !== 'production'
  }
}
