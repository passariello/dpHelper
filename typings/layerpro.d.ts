/*
Copyright: © 2022 Dario Passariello <dariopassariello@gmail.com>
License: MIT
*/

declare module 'layerpro'
declare var layerpro: any

// Remove popup errors about number of paramentes or existence
declare function confirm(f1?, func1?, func2?)
declare function prompt(f1?, string?)
declare function message(f1?)

////////////////////////////////////////////////////////////////

declare global {
  interface window {
    layerpro: any
  }
}

window.layerpro = window.layerpro || {}

