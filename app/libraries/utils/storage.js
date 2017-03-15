/**
 * # Storage
 * TODO: use store.js
 * > - https://github.com/marcuswestin/store.js
 */
const { localStorage, sessionStorage } = window

const wrapStorage = storage => ({
  set (key, value) {
    if (key && typeof key === 'string') {
      return storage.setItem(key, JSON.stringify(value))
    } else if (key && typeof key === 'object') {
      key.forEach(item => storage.setItem(item.key, JSON.stringify(item.value)))
    }
  },

  get (key) {
    if (key) {
      return JSON.parse(storage.getItem(key))
    }
    return storage
  },

  remove (key) {
    if (key) {
      return storage.removeItem(key)
    }
    return this.clear()
  },

  clear () {
    return storage.clear()
  }
})

/**
 * 本地存储
 * @type {Object}
 * @example
 *   import { local as storage } from './storage'
 *   stroage.get( ... )
 *   stroage.set( ... )
 *   stroage.remove( ... )
 *   stroage.clear()
 */
export const local = wrapStorage(localStorage)

/**
 * 会话存储
 * @type {Object}
 * @example
 *   import { session as storage } from './storage'
 *   stroage.get( ... )
 *   stroage.set( ... )
 *   stroage.remove( ... )
 *   stroage.clear()
 */
export const session = wrapStorage(sessionStorage)
