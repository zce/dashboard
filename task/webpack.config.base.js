// https://github.com/dingyiming/example-vue2/issues/9
const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')

const config = require('./config')
const utils = require('./utils')

module.exports = {
  context: config.paths.source,
  entry: {
    app: [path.resolve(config.paths.source, 'main.js')]
  },
  output: {
    filename: utils.asset('js', '[name].[hash:8].js'),
    path: config.paths.output,
    publicPath: config.paths.publicPath
  },
  module: {
    preLoaders: [
      { test: /\.js$/, loader: 'eslint', exclude: /node_modules/ },
      { test: /\.vue$/, loader: 'eslint', exclude: /node_modules/ }
    ],
    loaders: [
      { test: /\.js$/, loader: 'babel', exclude: /node_modules/ },
      { test: /\.vue$/, loader: 'vue' },
      { test: /\.(png|jpe?g|gif|svg)(\?.*)?$/, loader: 'url', query: { limit: 10000, name: utils.asset('img', '[name].[hash:8].[ext]') } },
      { test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/, loader: 'url', query: { limit: 10000, name: utils.asset('font', '[name].[hash:8].[ext]') } }
    ]
  },
  resolve: {
    extensions: ['', '.js', '.vue'],
    fallback: [path.resolve(__dirname, '../node_modules')],
    alias: {
      vue: 'vue/dist/vue.common.js',
      assets: path.resolve(config.paths.source, './assets'),
      components: path.resolve(config.paths.source, './components')
    }
  },
  resolveLoader: {
    fallback: [path.resolve(__dirname, '../node_modules')]
  },
  devServer: {
    outputPath: config.paths.output,
    contentBase: config.paths.output,
    // 支持 History API
    historyApiFallback: true,
    noInfo: true,
    inline: true,
    quiet: true, // no default console
    port: config.server.port,
    hot: true
  },
  plugins: [
    new CopyWebpackPlugin([
      // {output}/file.txt
      { from: config.paths.static, context: __dirname }
    ]),
    new HtmlWebpackPlugin({ title: 'WEDN.NET', template: path.resolve(config.paths.source, 'index.ejs') }),
    new webpack.DefinePlugin({ 'process.env': { NODE_ENV: JSON.stringify(config.env) } })
  ]
}
