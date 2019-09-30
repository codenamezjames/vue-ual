# Installation

## Direct Download / CDN

https://unpkg.com/vue-ual/dist/vue-ual 

[unpkg.com](https://unpkg.com) provides NPM-based CDN links. The above link will always point to the latest release on NPM. You can also use a specific version/tag via URLs like https://unpkg.com/vue-ual@{{ $version }}/dist/vue-ual.js
 
Include vue-ual after Vue and it will install itself automatically:

```html
<script src="https://unpkg.com/vue/dist/vue.js"></script>
<script src="https://unpkg.com/vue-ual/dist/vue-ual.js"></script>
```

## NPM

```sh
$ npm install vue-ual
```

## Yarn

```sh
$ yarn add vue-ual
```

When used with a module system, you must explicitly install the `vue-ual` via `Vue.use()`:

```javascript
import Vue from 'vue'
import vue-ual from 'vue-ual'

Vue.use(vue-ual)
```

You don't need to do this when using global script tags.

## Dev Build

You will have to clone directly from GitHub and build `vue-ual` yourself if
you want to use the latest dev build.

```sh
$ git clone https://github.com//vue-ual.git node_modules/vue-ual
$ cd node_modules/vue-ual
$ npm install
$ npm run build
```

