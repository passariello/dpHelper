/*
Copyright: © 2022 Dario Passariello <dariopassariello@gmail.com>
License: CC BY-NC-ND 4.0
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

