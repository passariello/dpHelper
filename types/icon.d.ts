/*
Copyright: © 2019 Dario Passariello <dariopassariello@gmail.com>
License: MIT
*/

////////////////////////////////////////////////////////////////

declare module 'icon'
declare var icon: any

declare global {
  interface globalThis {
    icon: any
  }
}

icon = globalThis.icon || {}
