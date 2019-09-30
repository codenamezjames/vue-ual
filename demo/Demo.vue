<template>
  <div class="demo" style="text-align:center;">
    <h1>Plugin Demo</h1>
        Version: {{version}}
    <ual-trigger :options="opts" @login="userCallback" />
<pre style="text-align: left; width: 400px; margin: 30px auto; background: #eee; padding: 30px;"><code>UserInfo:

{{stringify(user)}}</code></pre>
  </div>
</template>

<script>
/* eslint-disable no-console */
import { Scatter } from 'ual-scatter'
import {ualTrigger, version} from '../src/index'
import { MockAuthenticator } from '../src/components/authMock'
export default {
  components: {
    ualTrigger
  },
  name: 'demo',
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
          rpcEndpoints: [{
            protocol: 'https',
            host: 'example.net',
            port: Number(443),
          }]
        }],
        authenticators: [
          {authenticator: Scatter, netChainIds: [12345], options: { appName: 'UAL Example' }},
          MockAuthenticator
        ],
      }
    }
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
</script>

<style>

</style>
