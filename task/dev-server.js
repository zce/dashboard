const opn = require('opn')
const express = require('express')
const webpack = require('webpack')
const proxy = require('http-proxy-middleware')
const history = require('connect-history-api-fallback')
const FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin')
const config = require('../config')
const webpackConfig = require('../config/webpack')

// ## Hot module replacement
// - add hot-reload related code to entry chunks
for (const name in webpackConfig.entry) {
  webpackConfig.entry[name] = ['./task/dev-client'].concat(webpackConfig.entry[name])
}
webpackConfig.plugins = (webpackConfig.plugins || []).concat([
  // https://github.com/glenjamin/webpack-hot-middleware#installation--usage
  new webpack.HotModuleReplacementPlugin(),
  new webpack.NoEmitOnErrorsPlugin(),
  new FriendlyErrorsPlugin()
])

// ## Webpack compiler
const compiler = webpack(webpackConfig)

const devMiddleware = require('webpack-dev-middleware')(compiler, {
  publicPath: webpackConfig.output.publicPath,
  quiet: true
})

const hotMiddleware = require('webpack-hot-middleware')(compiler, {
  log: () => {}
})

// force page reload when html-webpack-plugin template changes
compiler.plugin('compilation', compilation => {
  compilation.plugin('html-webpack-plugin-after-emit', (data, callback) => {
    hotMiddleware.publish({ action: 'reload' })
    callback()
  })
})

// ## Express application
const app = express()

// - proxy api requests
Object.keys(config.server.proxy).forEach(item => {
  let options = config.server.proxy[item]
  if (typeof options === 'string') {
    options = { target: options }
  }
  app.use(proxy(options.filter || item, options))
})

// - handle fallback for HTML5 history API
// > index for public options
app.use(history({ index: config.paths.public }))

// - serve webpack bundle output
app.use(devMiddleware)

// - enable hot-reload and state-preserving
// - compilation error display
app.use(hotMiddleware)

// - serve pure static assets
app.use(config.paths.public, express.static(config.paths.static))

// - server url
const url = `http://localhost:${config.server.port}/`

// - print url to console
devMiddleware.waitUntilValid(() => console.log(`> Listening at ${url}\n`))

module.exports = app.listen(config.server.port, err => {
  if (err) throw err
  // when env is testing, don't need open it
  if (config.server.opn && process.env.NODE_ENV !== 'testing') {
    opn(url)
  }
})
