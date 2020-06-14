# Dashboard

[![Actions Status][actions-image]][actions-url]
[![Build Status][travis-image]][travis-url]
[![License][license-image]][license-url]
[![Dependency Status][dependency-image]][dependency-url]
[![devDependency Status][devdependency-image]][devdependency-url]
[![Code Style][style-image]][style-url]

> A dashboard scaffolding based on vue.js created by [vuejs/vue-cli](https://github.com/vuejs/vue-cli).

## Preview

![WEDN.NET Dashboard Login](https://user-images.githubusercontent.com/6166576/44618442-71adfc80-a8a8-11e8-8ff5-3dcb95dcaa8b.png)

![WEDN.NET Dashboard List](https://user-images.githubusercontent.com/6166576/44618443-74105680-a8a8-11e8-9af9-06ae4afb6d27.png)

### Online demo

https://dashboard.zce.me

> - username: zce
> - password: wanglei

## Usage

### Getting Started

```shell
# clone repo
$ git clone https://github.com/zce/dashboard.git
$ cd dashboard
# install dependencies
$ npm install # or yarn
```

### Available Scripts

```shell
# serve with hot reload at http://localhost:8080
$ npm run serve # or yarn serve

# lint the source files.
$ npm run lint # or yarn lint

# build for production with minification
$ npm run build # or yarn build

# build for production and deploy to gh-pages
$ npm run deploy # or yarn deploy
```

## API Server

https://dashboard-server.now.sh

> Source: [zce/dashboard-server](https://github.com/zce/dashboard-server)

### Usage

```shell
# clone api server
$ git clone https://github.com/zce/dashboard-server.git
# run api server
$ cd dashboard-server
$ npm install # or yarn
$ npm start # or yarn start
# => api server run @ http://localhost:2080
```

modify `VUE_APP_API_BASE` in `.env.development` or `.env.prodution`:

```diff
- VUE_APP_API_BASE=https://dashboard-server.now.sh
+ VUE_APP_API_BASE=http://localhost:3000
```

## Environment

- [Node](https://nodejs.org) >= 10.0.0
- [NPM](https://www.npmjs.com) >= 6.0.0 or [Yarn](https://yarnpkg.com) >= 1.20.0

## Stacks

- [Vue CLI](https://cli.vuejs.org/) - Standard Tooling for Vue.js Development
- [Vue](https://vuejs.org/) - The Progressive JavaScript Framework
- [Vuex](https://vuex.vuejs.org/) - Official state management pattern / library for Vue.js applications
- [Vue Router](http://router.vuejs.org/) - Official router for Vue.js applications
- [Vue I18n](https://kazupon.github.io/vue-i18n/) - Internationalization plugin for Vue.js
- ~~[Vue Resource](https://github.com/pagekit/vue-resource)~~ - RESTful APIs library (instead by axios)
- [Axios](https://github.com/axios/axios) - AJAX call library
- [Element UI](https://github.com/ElemeFE/element) - UI Framework (Partial use, such as forms, forms, etc)
- [NProgress](https://github.com/rstacruz/nprogress) - For slim progress bars like on YouTube, Medium, etc
- ~~[Webpack](https://webpack.js.org)~~ - Bundler (within @vue/cli-service)
- ~~[Vue Loader](https://vue-loader.vuejs.org/)~~ - Bundler (within @vue/cli-service)
- ~~[Babel](https://babeljs.io)~~ - JavaScript compiler (within @vue/cli-plugin-babel)
- ~~[ESLint](https://eslint.org)~~ - Linter (within @vue/cli-plugin-eslint)
- [Sass](https://sass-lang.com) - CSS Preprocessor
- [EditorConfig](https://editorconfig.org)
- [Travis CI](https://travis-ci.org) - CI System
- [GitHub Actions](https://github.com/features/actions) - CI System
- [JSON Server](https://github.com/typicode/json-server) - Basic framework of serverside
- [Mock](https://mockjs.com)
- etc.

## Todos

- [x] Restructure config file
- [x] Remove unused packages
- [x] Custom Element UI theme
- [x] All pages structure
- [x] JSON Server
- [x] Global state
- [x] Table demo
- [x] Login module
- [x] Restructure libs code
- [x] vue-resource -> Axios
- [x] Deploy to GitHub Pages by CI
- [x] I18n Translation
- [x] Users module
- [ ] JSDoc supports - https://code.visualstudio.com/Docs/languages/javascript
- [ ] Options module
- [ ] Media module
- [ ] Posts module
- [ ] Terms module
- [ ] Comments module
- [ ] Other module

## License

[MIT](LICENSE) &copy; [汪磊](https://zce.me) &amp; [WEDN.NET](https://wedn.net)



[actions-image]: https://github.com/zce/dashboard/workflows/CI/badge.svg
[actions-url]: https://github.com/zce/dashboard/actions
[travis-image]: https://img.shields.io/travis/zce/dashboard.svg
[travis-url]: https://travis-ci.org/zce/dashboard
[license-image]: https://img.shields.io/github/license/zce/dashboard.svg
[license-url]: https://github.com/zce/dashboard/blob/master/LICENSE
[dependency-image]: https://img.shields.io/david/zce/dashboard.svg
[dependency-url]: https://david-dm.org/zce/dashboard
[devdependency-image]: https://img.shields.io/david/dev/zce/dashboard.svg
[devdependency-url]: https://david-dm.org/zce/dashboard?type=dev
[style-image]: https://img.shields.io/badge/code%20style-standard-brightgreen.svg
[style-url]: https://standardjs.com
