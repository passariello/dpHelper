/*
Copyright: © 2019 Dario Passariello <dariopassariello@gmail.com>
License: MIT
*/

declare var $: any
declare var jQuery: any
declare module 'jquery'

// ////////////////////////////////////////////////////////////////

interface window {
  $: any
  jQuery: any
}

type $ = {}
type jQuery = {}
