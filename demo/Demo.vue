<template>
  <div class="demo">
    <h1>Plugin Demo</h1>
    <c-comp />
  </div>
</template>

<script>
import { cComp } from '../src/index'
export default {
  components: {
    cComp
  },
  name: 'demo',
  data: () => ({ a: 1, b: 1 })
}
</script>

<style>

</style>
