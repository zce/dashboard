# Dashboard

[![Build Status][travis-image]][travis-url]
[![Dependency Status][dependency-image]][dependency-url]
[![devDependency Status][devdependency-image]][devdependency-url]
[![Code Style][style-image]][style-url]

[travis-image]: https://travis-ci.org/zce/dashboard.svg?branch=vue
[travis-url]: https://travis-ci.org/zce/dashboard
[dependency-image]: https://david-dm.org/zce/dashboard/status.svg
[dependency-url]: https://david-dm.org/zce/dashboard
[devdependency-image]: https://david-dm.org/zce/dashboard/dev-status.svg
[devdependency-url]: https://david-dm.org/zce/dashboard?type=dev
[style-image]: https://img.shields.io/badge/code%20style-standard-brightgreen.svg
[style-url]: http://standardjs.com/

> A dashboard template based on vue.js.

> demo: http://dashboard.micua.com


## Environment

- Node >= 6.0.0
- Yarn >= 0.20.0
- NPM >= 3.0.0


## Stacks

- Vue 2.x
- Vue I18n 6.x
- Vue Router 2.x
- Vue Resource 1.x
- Webpack 2.x
- Babel 6.x
- ESLint 3.x
- EditorConfig
- Travis CI


## Clone Repo

```bash
# clone
$ git clone https://github.com/zce/dashboard.git

# submodule
$ git submodule init && git submodule update
```


## Build Setup

``` bash
# install dependencies
$ npm install

# serve with hot reload at http://localhost:2017
$ npm run dev

# build for production with minification
$ npm run build

# build for production and view the bundle analyzer report
$ npm run build --report
```

or yarn

``` bash
# install dependencies
$ yarn

# serve with hot reload at http://localhost:2017
$ yarn dev

# build for production with minification
$ yarn build

# build for production and view the bundle analyzer report
$ npm_config_report=true yarn build
```

For detailed explanation on how things work, checkout the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).


## Todos

- [x] Restructure config file
- [x] Remove unused package
- [x] Try iView UI
- [ ] Element UI theme
- [ ] Login module

## Link

- https://github.com/ElemeFE/element-dashboard
- https://github.com/ElementUI/element-admin
- https://github.com/lynzz/element-admin


## Template version

- commit: [358ad2](https://github.com/vuejs-templates/webpack/commit/358ad2c26a8e76c7b04f4c0ce5f5fa7be69d60ee)
- compare: [358ad2](https://github.com/vuejs-templates/webpack/compare/358ad2c26a8e76c7b04f4c0ce5f5fa7be69d60ee...master)


## Packages

```bash
yarn add nprogress vue vue-i18n vue-resource vue-router vuex -S
```

```bash
yarn add  autoprefixer babel-core babel-eslint babel-loader babel-plugin-transform-runtime babel-preset-env babel-preset-stage-2 babel-register chalk connect-history-api-fallback copy-webpack-plugin css-loader eslint eslint-config-standard eslint-friendly-formatter eslint-loader eslint-plugin-html eslint-plugin-promise eslint-plugin-standard eventsource-polyfill express extract-text-webpack-plugin file-loader friendly-errors-webpack-plugin function-bind html-webpack-plugin http-proxy-middleware node-sass opn optimize-css-assets-webpack-plugin ora rimraf sass-loader semver url-loader vue-loader vue-style-loader vue-template-compiler webpack webpack-bundle-analyzer webpack-dev-middleware webpack-hot-middleware webpack-merge -D
```


## License

[MIT](LICENSE) &copy; [汪磊](http://github.com/zce) & [WEDN.NET](http://wedn.net)
