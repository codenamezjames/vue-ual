/*
 * NOTE:
 *   This file is plugin stub for main.js
 */

import Vue from 'vue'
import plugin, {ualTrigger, version} from './index'

Vue.use(plugin)
export {ualTrigger, version}

/*
 * NOTE:
 *   If you want Vue instance of main.js to import something in your plugin as a Vue option,
 *   you need to export it here.
 */
// export default plugin
