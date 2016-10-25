const path = require('path')

const config = require('./config')

exports.asset = (...paths) => path.posix.join(config.paths.asset, ...paths)
