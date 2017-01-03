const storage = window.localStorage

export default {
  set (key, value) {
    if (key && typeof key === 'string') {
      return storage.setItem(key, value)
    } else if (key && typeof key === 'object') {
      key.forEach(item => storage.setItem(item.key, item.value))
    }
  },

  get (key) {
    if (key) {
      return storage.getItem(key)
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
}
