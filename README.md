# Dashboard

[![Actions Status][actions-img]][actions-url]
[![Build Status][travis-img]][travis-url]
[![License][license-img]][license-url]
[![Dependency Status][dependency-img]][dependency-url]
[![devDependency Status][devdependency-img]][devdependency-url]
[![Code Style][style-img]][style-url]

> A dashboard scaffolding based on vue.js created by [vuejs/vue-cli](https://github.com/vuejs/vue-cli).

## Preview

![WEDN.NET Dashboard Login](https://user-imgs.githubusercontent.com/6166576/44618442-71adfc80-a8a8-11e8-8ff5-3dcb95dcaa8b.png)

![WEDN.NET Dashboard List](https://user-imgs.githubusercontent.com/6166576/44618443-74105680-a8a8-11e8-9af9-06ae4afb6d27.png)

### Online demo

https://dashboard.zce.me

> - username: zce
> - password: wanglei

> P.S. For Chinese: https://zce.gitee.io/vue-admin

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

## License

[MIT](LICENSE) &copy; [汪磊](https://zce.me) &amp; [WEDN.NET](https://wedn.net)



[actions-img]: https://github.com/zce/dashboard/workflows/CI/badge
[actions-url]: https://github.com/zce/dashboard/actions
[travis-img]: https://img.shields.io/travis/com/zce/dashboard
[travis-url]: https://travis-ci.com/zce/dashboard
[license-img]: https://img.shields.io/github/license/zce/dashboard
[license-url]: https://github.com/zce/dashboard/blob/master/LICENSE
[dependency-img]: https://img.shields.io/david/zce/dashboard
[dependency-url]: https://david-dm.org/zce/dashboard
[devdependency-img]: https://img.shields.io/david/dev/zce/dashboard
[devdependency-url]: https://david-dm.org/zce/dashboard?type=dev
[style-img]: https://img.shields.io/badge/code%20style-standard-brightgreen
[style-url]: https://standardjs.com
