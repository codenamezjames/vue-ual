const version = '0.0.1'
import ualTrigger from './components/ualTrigger.vue'

const install = Vue => {
  /*
   * NOTE:
   *   if you need to extend Vue constructor, you can extend it in here.
   */

  Vue.prototype.$add = (a, b) => {
    return a + b
  }

  /*
   * NOTE:
   *  something implementation here ...
   */
}

const plugin = {
  install,
  version
}

export default plugin
export { ualTrigger }

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(plugin)
}
