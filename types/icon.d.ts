/*
Copyright: © 2022 Dario Passariello <dariopassariello@gmail.com>
License: MIT
*/

declare module 'icon'
declare var icon: any

////////////////////////////////////////////////////////////////

declare global {
  interface window {
    icon: any
  }
}

window.icon = window.icon || {}





