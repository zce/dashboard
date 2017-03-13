process.env.NODE_ENV = process.env.NODE_ENV || 'production'

const ora = require('ora')
const rm = require('rimraf')
const chalk = require('chalk')
const webpack = require('webpack')
const config = require('../config')
const webpackConfig = require('../config/webpack')

const spinner = ora(`Building for env:${process.env.NODE_ENV}...`)
spinner.start()

module.exports = () => rm(config.paths.output, err => {
  if (err) throw err

  webpack(webpackConfig, (err, stats) => {
    spinner.stop()
    if (err) throw err

    console.log(stats.toString({
      colors: true,
      modules: false,
      children: false,
      chunks: false,
      chunkModules: false
    }))

    console.log(chalk.cyan('  Build complete.\n'))
    console.log(chalk.yellow(
      '  Tip: built files are meant to be served over an HTTP server.\n' +
      '  Opening index.html over file:// won\'t work.\n'
    ))
  })
})

// Execute when root
if (!module.parent) {
  module.exports()
}
