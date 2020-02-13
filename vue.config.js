/**
 * Override convention configuration
 * https://cli.vuejs.org/config/
 */

module.exports = {
  publicPath: '', // for relative path
  assetsDir: 'assets',
  lintOnSave: process.env.NODE_ENV !== 'production',
  productionSourceMap: false,
  css: {
    sourceMap: process.env.NODE_ENV !== 'production'
  }
}
