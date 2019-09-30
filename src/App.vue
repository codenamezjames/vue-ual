<template>
  <div id="app">
    <ual-trigger />
  </div>
</template>

<script>
import {ualTrigger} from './plugin'
export default {
  components: {
    ualTrigger
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