
<template>
  <div ref="ual-mount-point"></div>
</template>

<script>
/* eslint-disable no-console */
export default {
  name: 'ualTrigger',
  async mounted () {
    // import here for SSR
    const { UALJs } = await import('ual-plainjs-renderer')

    const self = this
    const options = this.options

    const ual = new UALJs(
      function (...arg) { return self.loginCallback(...arg) },
      options.nets,
      options.name,
      options.authenticators.map(Auth => new Auth(options.nets)),
      { containerElement: this.$refs['ual-mount-point'] }
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
