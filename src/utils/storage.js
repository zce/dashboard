/**
 * Storage
 * > - https://github.com/marcuswestin/store.js
 * > - https://github.com/marcuswestin/store.js#make-your-own-build
 * @example
 *   import storage from './storage'
 *   storage.get( ... )
 *   storage.set( ... )
 *   storage.remove( ... )
 *   storage.clearAll()
 *   storage.each( ... )
 */

import { createStore } from 'store/src/store-engine'
import storage from 'store/storages/localStorage'

export default createStore([storage], [], process.env.VUE_APP_STORAGE_PREFIX)
