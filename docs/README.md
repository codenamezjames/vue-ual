# Quick Start

`VueUal` plugin is plugin for [Vue.js](http://vuejs.org).

### Install
```sh
$ npm install vue-ual universal-authenticator-library
$ npm install ual-scatter #optional
```

### Usage
```html
<template>
  <ual-trigger :options="opts" @login="userCallback" />
</template>
```


```javascript
import {ualTrigger, version} from 'vue-ual'
import { Scatter } from 'ual-scatter' //optional

export default {
  components: {
    ualTrigger
  },
  data () {
    return {
      version,
      user: {
        name: '',
        chainId: ''
      },
      opts: {
        name: 'VUE UAL test',
        nets: [{
          chainId: 12345,
          rpcEndpoints: [{ protocol: 'https', host: 'example.net', port: Number(443), }]
        }],
        authenticators: [
          {authenticator: Scatter, netChainIds: [12345], options: { appName: 'UAL Example' }},
        ]
      }
    }
  },
  methods: {
    async userCallback (users) {
      const loggedInUser = users[0]
      this.user.name = await loggedInUser.getAccountName()
      this.user.chainId = await loggedInUser.getChainId()
      console.info('User Information:')
      console.info('Account Name:', this.user.name)
      console.info('Chain Id:', this.user.chainId)
    }
  }
}
```


checkout the [demo](https://github.com/codenamezjames/vue-ula/tree/master/demo) (see [`README.md`](https://github.com/codenamezjames/vue-ual/) to run it).
