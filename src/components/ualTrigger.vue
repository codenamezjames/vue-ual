
<template>
  <div id="ual-mount-point">
  </div>
</template>

<script>
/* eslint-disable no-console */
import { Ledger } from 'ual-ledger'
import { UALJs } from 'ual-plainjs-renderer'
import { MockAuthenticator } from './authMock'

const exampleNet = {
  chainId: 12345,
  rpcEndpoints: [{
    protocol: 'https',
    host: 'example.net',
    port: Number(443),
  }]
}

export default {
  name: 'ualTrigger',
  mounted () {
    const self = this
    const ual = new UALJs(
      self.userCallback,
      [exampleNet],
      'VUE UAL Test',
      [
        new Ledger([exampleNet]),
        new MockAuthenticator([exampleNet]),
      ],
      {
        containerElement: document.getElementById('ual-mount-point')
      }
    )

    ual.init()
  },
  methods: {
    userCallback: async users => {
      const loggedInUser = users[0]
      console.info('User Information:')
      console.info('Account Name:', await loggedInUser.getAccountName())
      console.info('Chain Id:', await loggedInUser.getChainId())

      // balanceUpdateInterval = setInterval(updateBalance, 1000)
    }
  }
}
</script>

<style scoped>

</style>
