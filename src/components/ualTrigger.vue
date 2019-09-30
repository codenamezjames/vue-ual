
<template>
  <div ref="ual-mount-point"></div>
</template>

<script>
/* eslint-disable no-console */
import { Ledger } from 'ual-ledger'
import { UALJs } from 'ual-plainjs-renderer'
import { MockAuthenticator } from './authMock'



export default {
  name: 'ualTrigger',
  mounted () {
    const self = this
    const options = this.options


    const ual = new UALJs(
      function (...arg) { return self.loginCallback(...arg) },
      [options.net],
      options.name,
      [
        new Ledger([options.net]),
        new MockAuthenticator([options.net]),
      ],
      {
        containerElement: this.$refs['ual-mount-point']
      }
    )

    ual.init()
  },
  methods: {
    loginCallback (...args) {
      return this.$emit('login', ...args)
    }
  },
  props: {
    options: {
      type: Object,
      default: () => ({})
    }
  }
}
</script>

<style scoped>

</style>
