# Getting Started

> We will be using [ES2016](https://github.com/lukehoban/es6features) in the code samples in the guide.


## HTML

```html
<!-- HTML: -->
<template>
  <ual-trigger :options="opts" @login="userCallback" />
</template>
```

## JavaScript

```javascript
// Script:
import {ualTrigger, version} from 'vue-ual'
import { Scatter } from 'ual-scatter'

export default {
  components: {
    ualTrigger
  },
  data () {
    return {
      version,
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
