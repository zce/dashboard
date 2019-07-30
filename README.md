# Dashboard

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

http://dashboard.zce.me

> - username: zce
> - password: wanglei

## Usage

### Getting Started

```shell
# clone repo
$ git clone https://github.com/zce/dashboard.git
$ cd dashboard
# install dependencies
$ yarn # or npm install
```

### Available Scripts

```shell
# serve with hot reload at http://localhost:8080
$ yarn serve

# lint the source files.
$ yarn lint

# build for production with minification
$ yarn build

# build for production and deploy to gh-pages
$ yarn deploy
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
$ yarn
$ yarn start
# => api server run @ http://localhost:2080
```

modify `VUE_APP_API_BASE` in `.env.development` or `.env.prodution`:

```diff
- VUE_APP_API_BASE=https://dashboard-server.now.sh
+ VUE_APP_API_BASE=http://localhost:3000
```

## Environment

- [Node](https://nodejs.org) >= 8.0.0
- [Yarn](https://yarnpkg.com) >= 0.20.0 or [NPM](https://www.npmjs.com) >= 3.0.0

## Stacks

- [Vue CLI 3](https://github.com/vuejs/vue-cli)
- [Vue](https://vuejs.org)
- [Vuex](https://github.com/vuejs/vuex)
- [Vue Router](https://github.com/vuejs/vue-router)
- [Vue I18n](https://github.com/kazupon/vue-i18n)
- ~~[Vue Resource](https://github.com/pagekit/vue-resource)~~
- [Axios](https://github.com/mzabriskie/axios)
- [Element UI](https://github.com/ElemeFE/element)
- [NProgress](https://github.com/rstacruz/nprogress)
- [Webpack](https://webpack.js.org)
- [Vue Loader](https://vue-loader-v14.vuejs.org)
- [Babel](https://babeljs.io)
- [Sass](https://sass-lang.com)
- [JSON Server](https://github.com/typicode/json-server)
- [Mock](http://mockjs.com)
- [ESLint](http://eslint.org)
- [EditorConfig](https://editorconfig.org)
- [Travis CI](https://travis-ci.org)

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
- [ ] I18n Translation
- [ ] Options module
- [ ] Users module
- [ ] Media module
- [ ] Posts module
- [ ] Terms module
- [ ] Comments module
- [ ] Other module

## License

[MIT](LICENSE) &copy; [汪磊](https://zce.me) &amp; [WEDN.NET](https://wedn.net)



[travis-image]: https://img.shields.io/travis/zce/dashboard.svg
[travis-url]: https://travis-ci.org/zce/dashboard
[license-image]: https://img.shields.io/github/license/zce/dashboard.svg
[license-url]: https://github.com/zce/dashboard/blob/master/LICENSE
[dependency-image]: https://img.shields.io/david/zce/dashboard.svg
[dependency-url]: https://david-dm.org/zce/dashboard
[devdependency-image]: https://img.shields.io/david/dev/zce/dashboard.svg
[devdependency-url]: https://david-dm.org/zce/dashboard?type=dev
[style-image]: https://img.shields.io/badge/code%20style-standard-brightgreen.svg
[style-url]: http://standardjs.com
