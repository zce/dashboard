# dashboard

[![Actions Status][actions-img]][actions-url]
[![Build Status][travis-img]][travis-url]
[![License][license-img]][license-url]
[![Dependency Status][dependency-img]][dependency-url]
[![devDependency Status][devdependency-img]][devdependency-url]
[![Code Style][style-img]][style-url]

> A dashboard scaffolding based on Vue.js 3.0 & Vite.

### TODOs

- [x] Vite
- [x] Migration deps to 3.0
- [x] Basic API usage
- [ ] Compatibility issues
- [ ] Composition APIs

### Features

- Type annotation enhancement by JSDoc
- Access control by route interception
- Vuex (modules, plugins)
- API Services
- I18n support
- Element UI custom theme
- Travis CI & GitHub Actions
- etc.

### Preview

![WEDN.NET Dashboard Login](https://user-imgs.githubusercontent.com/6166576/44618442-71adfc80-a8a8-11e8-8ff5-3dcb95dcaa8b.png)

![WEDN.NET Dashboard List](https://user-imgs.githubusercontent.com/6166576/44618443-74105680-a8a8-11e8-9af9-06ae4afb6d27.png)

### Online demo

https://dashboard.zce.me

> - username: zce
> - password: wanglei

> P.S. For Chinese: https://zce.gitee.io/vue-admin

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org) (>= 10.12, 12.10 preferred)
- [npm](https://www.npmjs.com) (>= 6.x) or [yarn](https://yarnpkg.com) (>= 1.20)
- [Git](https://git-scm.com) (>= 2.20)

### Clone & Install

```shell
# clone repo
$ git clone https://github.com/zce/dashboard.git
$ cd dashboard
# install dependencies
$ npm install # or yarn
```

### Scaffolding tools

Create an application by [zce/caz](https://github.com/zce/caz)

```shell
# create vue.js apps through this
$ npx caz vue dashboard
# enter generated directory
$ cd dashboard
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

## Fake API Server

Online service by Vercel: https://dashboard-server.now.sh

> Source: [zce/dashboard-server](https://github.com/zce/dashboard-server)

### Usage

```shell
# clone api server
$ git clone https://github.com/zce/dashboard-server.git

$ cd dashboard-server

# install deps
$ npm install # or yarn

# run api server
$ npm start # or yarn start

# => api server run @ http://localhost:2080
```

Then modify `VUE_APP_API_BASE` in `.env.development` or `.env.prodution`:

```diff
- VUE_APP_API_BASE=https://dashboard-server.now.sh
+ VUE_APP_API_BASE=http://localhost:3000
```

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
