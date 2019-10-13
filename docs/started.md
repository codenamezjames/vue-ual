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
import {ualTrigger, version} from './plugin'
import { Ledger } from 'ual-ledger'
import { Scatter } from 'ual-scatter'
import { MockAuthenticator } from './components/authMock'

export default {
  components: {
    ualTrigger
  },
  data: function() {
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
          rpcEndpoints: [{
            protocol: 'https',
            host: 'example.net',
            port: Number(443),
          }]
        }],
        authenticators: [
          Ledger,
          {authenticator: Scatter, netChainIds: [12345], options: { appName: 'UAL Example' }},
          MockAuthenticator
        ],
      }
    };
  },
  methods: {
    stringify (item) {
      return JSON.stringify(item, null, 2)
    },
    async userCallback (users) {
      const loggedInUser = users[0]
      this.user.name = await loggedInUser.getAccountName()
      this.user.chainId = await loggedInUser.getChainId()
      console.info('User Information:')
      console.info('Account Name:', this.user.name)
      console.info('Chain Id:', this.user.chainId)

      // balanceUpdateInterval = setInterval(updateBalance, 1000)
    }
  }
}
```
