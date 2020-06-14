import { axios, storage } from '../utils'
import { CHANGE_SESSION, TOGGLE_SIDEBAR_COLLAPSE, INCREMENT, DECREMENT, CHANGE_TITLE } from './mutation-types'

/**
 * @type {import('vuex/types').Plugin<typeof import('./state').default>}
 */
const storagePlugin = store => {
  // called when the store is initialized
  store.subscribe((mutation, state) => {
    // called after every mutation.
    // The mutation comes in the format of `{ type, payload }`.
    switch (mutation.type) {
      case CHANGE_SESSION:
        // save session
        storage.set('session', state.session)
        break
      case TOGGLE_SIDEBAR_COLLAPSE:
        // save sidebar collapse
        storage.set('sidebar_collapse', state.sidebar.collapse)
        break
      case INCREMENT:
      case DECREMENT:
        // save demo counter
        storage.set('demo_count', state.count)
        break
    }
  })
}

/**
 * @type {import('vuex/types').Plugin<typeof import('./state').default>}
 */
const syncToDomPlugin = store => {
  // called when the store is initialized
  store.subscribe((mutation, state) => {
    // called after every mutation.
    // The mutation comes in the format of `{ type, payload }`.
    switch (mutation.type) {
      case CHANGE_TITLE:
        // sync to dom
        document.title = state.title
        break
    }
  })
}

/**
 * @type {import('vuex/types').Plugin<typeof import('./state').default>}
 */
const axiosPlugin = store => {
  // change axios authorization header
  if (store.state.session && store.state.session.token) {
    // init axios headers
    axios.defaults.headers.Authorization = `Bearer ${store.state.session.token}`
  }
  // called when the store is initialized
  store.subscribe((mutation, state) => {
    // called after every mutation.
    // The mutation comes in the format of `{ type, payload }`.
    if (mutation.type !== CHANGE_SESSION) return

    // change axios default request auth token
    if (state.session && state.session.token) {
      // change axios authorization header
      axios.defaults.headers.Authorization = `Bearer ${state.session.token}`
    }
  })
}

export default [
  storagePlugin,
  syncToDomPlugin,
  axiosPlugin
]
