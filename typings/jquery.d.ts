/*
Copyright: © 2022 Dario Passariello <dariopassariello@gmail.com>
License: MIT
*/

declare var $: any
declare var JQuery: any
declare module 'jquery'

// ////////////////////////////////////////////////////////////////

declare global {
  interface window {
    $: any
    JQuery: any
  }
}

window.$ = window.$ || {}
window.JQuery = window.JQuery || {}

