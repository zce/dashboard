const express = require('express')
const proxy = require('http-proxy-middleware')
const history = require('connect-history-api-fallback')
const { devServer } = require('./webpack.config')

const app = express()

for (const key in devServer.proxy) {
  const item = devServer.proxy[key]
  app.use(key, proxy(Object.assign({ changeOrigin: true }, item)))
}

app.use(history())

app.use(express.static('dist'))

app.listen(process.env.PORT || 2080, err => {
  if (err) throw err
  console.log('server is ready, please visit http://localhost:2080/')
})
