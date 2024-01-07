/*
Copyright: © 2022 Dario Passariello <dariopassariello@gmail.com>
License: MIT
*/

declare module 'menupro'
declare var menupro: any

////////////////////////////////////////////////////////////////

declare global {
  interface window {
    menupro: any
  }
}

window.menupro = window.menupro || {}

