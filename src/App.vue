
<template>
  <div id="app">
    Version: {{version}}
    <ual-trigger :options="opts" @login="userCallback" />
<pre style="text-align: left; width: 400px; margin: 30px auto; background: #eee; padding: 30px;"><code>UserInfo:

{{stringify(user)}}</code></pre>
  </div>
</template>

<script>
/* eslint-disable no-console */
import {ualTrigger, version} from './plugin'

export default {
  components: {
    ualTrigger
  },
  data: function() {
    return {
      version,
      loggedInUser: {},
      user: {
        name: '',
        chainId: ''
      },
      opts:{
        name: 'VUE UAL test',
        net: {
          chainId: 12345,
          rpcEndpoints: [{
            protocol: 'https',
            host: 'example.net',
            port: Number(443),
          }]
        }
      }
    };
  },
  methods: {
    stringify (item) {
      return JSON.stringify(item, null, 2)
    },
    async userCallback (users) {
      this.loggedInUser = users[0]
      this.user.name = await this.loggedInUser.getAccountName()
      this.user.chainId = await this.loggedInUser.getChainId()
      console.info('User Information:')
      console.info('Account Name:', this.user.name)
      console.info('Chain Id:', this.user.chainId)

      // balanceUpdateInterval = setInterval(updateBalance, 1000)
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  margin-top: 60px;
}
</style>