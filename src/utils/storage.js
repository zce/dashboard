/**
 * Storage
 *
 * Ref:
 * - https://github.com/marcuswestin/store.js
 *
 * @example
 *   storage.get( ... )
 *   storage.set( ... )
 */

export default {
  get: key => {
    const json = localStorage.getItem(process.env.VUE_APP_STORAGE_PREFIX + key)
    try {
      if (!json) return json
      return JSON.parse(json)
    } catch {
      return json
    }
  },
  set: (key, value) => {
    const json = JSON.stringify(value)
    localStorage.setItem(process.env.VUE_APP_STORAGE_PREFIX + key, json)
  }
}
