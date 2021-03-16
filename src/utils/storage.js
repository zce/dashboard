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
    const json = localStorage.getItem(import.meta.env.VITE_STORAGE_PREFIX + key)
    try {
      if (!json) return json
      return JSON.parse(json)
    } catch {
      return json
    }
  },
  set: (key, value) => {
    const json = JSON.stringify(value)
    localStorage.setItem(import.meta.env.VITE_STORAGE_PREFIX + key, json)
  }
}
