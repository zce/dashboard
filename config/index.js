const path = require('path')
const env = process.env.NODE_ENV || 'development'

const isDevelopment = env === 'development'
const isProduction = !isDevelopment

// source root
const root = path.join(__dirname, '..')
// `file://` won't work on `publicPath` starts with /
const publicPath = '/'
// `docs` on master branch
const outputPath = 'dist'

// # Config
module.exports = {
  env: {
    NODE_ENV: JSON.stringify(env),
    DEBUG_MODE: JSON.stringify(isDevelopment),
    PUBLIC_URL: JSON.stringify(publicPath)
  },
  paths: {
    source: path.join(root, 'app'),
    static: path.join(root, 'static'),
    output: path.join(root, outputPath),
    public: publicPath,
    // assets directory name
    assets: 'assets',
    pages: {
      index: path.join(root, outputPath, 'index.html'),
      // just for gh-pages
      alias: path.join(root, outputPath, '404.html')
    }
  },
  server: {
    // default port where dev server listens for incoming traffic
    port: process.env.PORT || 2017,
    // automatically open browser, if not set will be false
    opn: false,
    // Define HTTP proxies to your custom API backend
    // https://github.com/chimurai/http-proxy-middleware
    proxy: {
      '/api': {
        target: 'http://jsonplaceholder.typicode.com/',
        changeOrigin: true,
        secure: false,
        logLevel: 'error'
      }
    }
  },
  // CSS Sourcemaps off by default because relative paths are "buggy"
  // with this option, according to the CSS-Loader README
  // (https://github.com/webpack/css-loader#sourcemaps)
  // In our experience, they generally work as expected,
  // just be aware of this issue when enabling this option.
  sourceMap: { js: true, css: true },
  // Gzip off by default as many popular static hosts such as
  // Surge or Netlify already gzip all static assets for you.
  // Before setting to `true`, make sure to:
  // npm install --save-dev compression-webpack-plugin
  gzip: { enable: true, extensions: ['js', 'css', 'ttf', 'woff', 'svg'] },
  // Run the build command with an extra argument to
  // View the bundle analyzer report after build finishes:
  // `npm run build --report` or `npm_config_report=true yarn build`
  // Set to `true` or `false` to always turn it on or off
  enableBundleAnalyzer: process.env.npm_config_report,
  isDevelopment: isDevelopment,
  isProduction: isProduction,
  title: 'WEDN.NET'
}
