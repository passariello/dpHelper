/*
Copyright: © 2019 Dario Passariello <dariopassariello@gmail.com>
License: MIT
*/

declare var $: any
declare var jQuery: any
declare module 'jquery'

// ////////////////////////////////////////////////////////////////

interface globalThis {
  $: any
  jQuery: any
}

type $ = globalThis
type jQuery = globalThis

$ = {}
jQuery = {}