process.env.NODE_ENV = process.env.NODE_ENV || 'development'
// const webpack = require('webpack')
const webpackMerge = require('webpack-merge')

const webpackBaseConfig = require('./webpack.config.base')
const config = require('./config')

module.exports = webpackMerge(webpackBaseConfig, {
  module: {
    loaders: [
      {
        test: /\.css$/,
        loader: 'style!css' + (config.sourceMap.css ? '?sourceMap' : '')
      },
      {
        test: /\.less$/,
        loader: 'style!css' + (config.sourceMap.css ? '?sourceMap!less' : '!less')
      }
    ]
  },
  devtool: config.sourceMap.js ? '#eval-source-map' : '',
  eslint: {
    formatter: require('eslint-friendly-formatter')
  }
})
