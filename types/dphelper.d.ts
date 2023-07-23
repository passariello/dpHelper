/*
Copyright: © 2022 Dario Passariello <dariopassariello@gmail.com>
License: CC BY-NC-ND 4.0
*/

declare module 'dphelper'

declare var dphelper: any
declare var state: any
declare var store: any
declare var cache: any

////////////////////////////////////////////////////////////////

declare global {
  interface Window {
    dphelper: any
    state: any
    store: any
    cache: any
  }
}

if (typeof window === 'undefined') window = globalThis

window.dphelper = window.dphelper || {}

window.state = window.state || {}
window.store = window.store || {}
window.cache = window.cache || {}
