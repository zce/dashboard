process.env.NODE_ENV = process.env.NODE_ENV || 'production'

const path = require('path')
const webpack = require('webpack')
const webpackMerge = require('webpack-merge')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

const webpackBaseConfig = require('./webpack.config.base')
const config = require('./config')

module.exports = webpackMerge(webpackBaseConfig, {
  module: {
    loaders: [
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract('style', 'css' + (config.sourceMap.css ? '?sourceMap' : ''))
      },
      {
        test: /\.less$/,
        loader: ExtractTextPlugin.extract('style', 'css' + (config.sourceMap.css ? '?sourceMap' : ''), 'less')
      }
    ]
  },
  devtool: config.sourceMap.js ? '#source-map' : '',
  plugins: [
    new ExtractTextPlugin(path.posix.join(config.paths.asset, 'css', '[name].[hash:6].css')),
    new CleanWebpackPlugin([config.paths.output], { root: path.resolve(config.paths.output, '..') }),
    new HtmlWebpackPlugin({ title: 'WEDN.NET', filename: config.paths.index, template: path.resolve(config.paths.source, 'index.ejs') }),
    new webpack.optimize.UglifyJsPlugin({ comments: false, compress: { warnings: false } }),
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.BannerPlugin('Copyright (c) WEDN.NET'),
    // split vendor js into its own file
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      minChunks: (module, count) => {
        // any required modules inside node_modules are extracted to vendor
        return (
          module.resource && /\.js$/.test(module.resource) &&
          module.resource.indexOf('node_modules') === 0
        )
      }
    }),
    // extract webpack runtime and module manifest to its own file in order to
    // prevent vendor hash from being updated whenever app bundle is updated
    new webpack.optimize.CommonsChunkPlugin({
      name: 'manifest',
      chunks: ['vendor']
    })
  ],
  vue: {
    loaders: {
      js: 'babel',
      css: ExtractTextPlugin.extract('css' + (config.sourceMap.css ? '?sourceMap' : '')),
      less: ExtractTextPlugin.extract('css' + (config.sourceMap.css ? '?sourceMap!less' : '!less'))
    }
  }
})
