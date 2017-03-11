const express = require('express')
const proxy = require('http-proxy-middleware')
const history = require('connect-history-api-fallback')
const config = require('../config')

const app = express()

if (config.server.proxy) {
  for (const key in config.server.proxy) {
    const item = config.server.proxy[key]
    app.use(key, proxy(Object.assign({ changeOrigin: true }, item)))
  }
}

app.use(history({ index: config.paths.public }))

app.use(config.paths.public, express.static(config.paths.output))

app.listen(config.server.port, err => {
  if (err) throw err
  console.log(`> Listening at http://localhost:${config.server.port}/`)
})
