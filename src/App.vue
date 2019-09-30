<template>
  <div id="app">
    Version: {{version}}
    <ual-trigger />
  </div>
</template>

<script>
import {ualTrigger, version} from './plugin'
export default {
  components: {
    ualTrigger
  },
  data: function() {
return {
    version
  };
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