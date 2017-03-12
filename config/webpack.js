const webpack = require('webpack')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const OptimizeCSSPlugin = require('optimize-css-assets-webpack-plugin')
const FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin')
const eslintFriendlyFormatter = require('eslint-friendly-formatter')
const utils = require('./utils')
const config = require('./')

// # Webpack config
// =========================
module.exports = {
  context: config.paths.root,
  entry: {
    app: [utils.sourcePath('main.js')]
  },
  output: {
    library: 'wedn',
    libraryTarget: 'umd',
    path: config.paths.output,
    filename: config.isDevelopment ? '[name].js' : utils.assetsPath('js', '[name].[chunkhash:6].js'),
    publicPath: config.paths.public,
    chunkFilename: config.isDevelopment ? '[name].js' : utils.assetsPath('js', '[name].[chunkhash:6].js'),
    // source map not work
    // devtoolModuleFilenameTemplate: 'wedn',
    sourceMapFilename: '[file].map'
  },
  module: {
    rules: [
      {
        test: /\.(js|vue)$/,
        enforce: 'pre',
        loader: 'eslint-loader',
        include: [utils.sourcePath(), utils.sourcePath('test')],
        exclude: /node_modules/,
        options: {
          formatter: eslintFriendlyFormatter
        }
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        exclude: /node_modules/,
        options: {
          loaders: utils.cssLoaders(config.isProduction)
        }
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        include: [utils.sourcePath(), utils.sourcePath('test')],
        exclude: /node_modules/
      },
      {
        test: /\.json$/,
        loader: 'json-loader'
      },
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: utils.assetsPath('img', '[name].[hash:6].[ext]')
        }
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: utils.assetsPath('font', '[name].[hash:6].[ext]')
        }
      }
    ].concat(utils.styleLoaders(config.isProduction))
  },
  resolve: {
    modules: ['node_modules', config.paths.source],
    extensions: ['.js', '.vue', '.json'],
    alias: {
      '@': utils.sourcePath(),
      'assets': utils.sourcePath('assets'),
      'components': utils.sourcePath('components'),
      'libraries': utils.sourcePath('libraries'),
      'views': utils.sourcePath('views'),
      // $: only module name
      // runtime-only build, template option is not available.
      'vue$': 'vue/dist/vue.common'
    }
  },
  performance: {
    hints: 'warning',
    maxAssetSize: 8 * 1024 * 1000,
    maxEntrypointSize: 8 * 1024 * 1000,
    assetFilter: name => name.endsWith('.css') || name.endsWith('.js')
  },
  devtool: config.isDevelopment
    ? '#cheap-module-eval-source-map'
    : config.sourceMap.js ? '#source-map' : false,
  target: 'web',
  plugins: [
    // http://vuejs.github.io/vue-loader/en/workflow/production.html
    new webpack.DefinePlugin({ 'process.env': config.env }),
    // generate dist index.html with correct asset hash for caching.
    // you can customize output by editing /index.html
    // see https://github.com/ampedandwired/html-webpack-plugin
    utils.htmlWebpackPlugin(config.isDevelopment ? 'index.html' : config.paths.pages.index)
  ]
}

// # Environment config
if (config.isDevelopment) {
  // ## Development
  // add hot-reload related code to entry chunks
  for (const name in module.exports.entry) {
    module.exports.entry[name] = ['./scripts/dev-client'].concat(module.exports.entry[name])
  }

  module.exports.plugins = (module.exports.plugins || []).concat([
    // https://github.com/glenjamin/webpack-hot-middleware#installation--usage
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
    new FriendlyErrorsPlugin()
  ])
} else {
  // ## Production
  module.exports.plugins = (module.exports.plugins || []).concat([
    // banner
    new webpack.BannerPlugin('Copyright (c) WEDN.NET'),
    // extract css into its own file -- ?v=[contenthash:6]
    new ExtractTextPlugin(utils.assetsPath('css', '[name].[contenthash:6].css')),
    // Compress extracted CSS. We are using this plugin so that possible
    // duplicated CSS from different components can be deduped.
    new OptimizeCSSPlugin(),
    // split vendor js into its own file
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      minChunks: m => m.resource && /\.js$/.test(m.resource) && m.resource.includes('node_modules')
    }),
    // extract webpack runtime and module manifest to its own file in order to
    // prevent vendor hash from being updated whenever app bundle is updated
    new webpack.optimize.CommonsChunkPlugin({
      name: 'manifest',
      chunks: ['vendor']
    }),
    new webpack.optimize.UglifyJsPlugin({
      compress: { warnings: false },
      comments: false,
      sourceMap: true
    }),
    new webpack.LoaderOptionsPlugin({
      debug: false,
      minimize: true
    }),
    // copy custom static assets
    new CopyWebpackPlugin([
      { from: config.paths.static, context: __dirname, ignore: ['.*'] }
    ])
  ])

  // just for gh-pages 404
  if (config.paths.pages.alias) {
    module.exports.plugins.push(utils.htmlWebpackPlugin(config.paths.pages.alias))
  }

  // compression gzip
  if (config.gzip.enable) {
    const CompressionWebpackPlugin = require('compression-webpack-plugin')
    module.exports.plugins.push(
      new CompressionWebpackPlugin({
        asset: '[path].gz[query]',
        algorithm: 'gzip',
        test: new RegExp(`\\.(${config.gzip.extensions.join('|')})$`),
        threshold: 10240,
        minRatio: 0.8
      })
    )
  }

  // bundle analyzer
  if (config.enableBundleAnalyzer) {
    const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer')
    module.exports.plugins.push(new BundleAnalyzerPlugin())
  }
}
