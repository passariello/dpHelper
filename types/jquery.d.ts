/*
Copyright: © 2019 Dario Passariello <dariopassariello@gmail.com>
License: MIT
*/

type $ = {}
type jQuery = {}

declare var $: any
declare var jQuery: any
declare module 'jquery'

// ////////////////////////////////////////////////////////////////

declare global {
  interface globalThis {
    $: any
    jQuery: any
  }
}

$ = globalThis.$ || {}
jQuery = globalThis.jQuery || {}
