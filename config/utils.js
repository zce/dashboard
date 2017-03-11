const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const config = require('./')

exports.sourcePath = (...args) => path.join(config.paths.source, ...args)

exports.assetsPath = (...args) => path.posix.join(config.paths.assets, ...args)

exports.htmlWebpackPlugin = name => new HtmlWebpackPlugin({
  title: 'WEDN.NET',
  filename: name,
  template: exports.sourcePath('index.html'),
  inject: false,
  minify: config.isProduction && {
    removeComments: true,
    collapseWhitespace: true,
    removeAttributeQuotes: true
    // more options:
    // https://github.com/kangax/html-minifier#options-quick-reference
  },
  // necessary to consistently work with multiple chunks via CommonsChunkPlugin
  chunksSortMode: 'dependency'
})

exports.cssLoaders = extract => {
  const cssLoader = {
    loader: 'css-loader',
    options: { minimize: config.isProduction, sourceMap: config.sourceMap.css }
  }

  // Get loader string to be used with extract text plugin
  function getLoaders (name, options) {
    const loaders = [cssLoader]

    if (name) {
      loaders.push({
        loader: `${name}-loader`,
        options: Object.assign({}, options, { sourceMap: config.sourceMap.css })
      })
    }

    // Extract CSS when that option is specified
    // (which is the case during production build)
    if (!extract) return ['vue-style-loader'].concat(loaders)
    // TODO: publicPath when config.paths.public is rel path
    return ExtractTextPlugin.extract({
      use: loaders,
      fallback: 'vue-style-loader',
      publicPath: config.paths.public || '../../'
    })
  }

  // http://vuejs.github.io/vue-loader/en/configurations/extract-css.html
  return {
    css: getLoaders(),
    postcss: getLoaders(),
    less: getLoaders('less'),
    sass: getLoaders('sass', { indentedSyntax: true }),
    scss: getLoaders('sass'),
    stylus: getLoaders('stylus'),
    styl: getLoaders('stylus')
  }
}

// Generate loaders for standalone style files (outside of .vue)
exports.styleLoaders = extract => {
  const output = []
  const loaders = exports.cssLoaders(extract)
  for (const ext in loaders) {
    output.push({ test: new RegExp('\\.' + ext + '$'), use: loaders[ext] })
  }
  return output
}
