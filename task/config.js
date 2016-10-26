const path = require('path')

module.exports = {
  env: process.env.NODE_ENV || 'development',
  paths: {
    // project: path.resolve(__dirname, '..'),
    source: path.resolve(__dirname, '../app'),
    static: path.resolve(__dirname, '../static'),
    output: path.resolve(__dirname, '../dist'),
    publicPath: '/',
    asset: 'assets',
    index: path.resolve(__dirname, '../dist/index.html')
  },
  sourceMap: {
    js: true,
    css: true
  },
  server: {
    port: process.env.PORT || 3080
  }
}
