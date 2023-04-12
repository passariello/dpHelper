/*
Copyright: © 2022 Dario Passariello <dariopassariello@gmail.com>
License: CC BY-NC-ND 4.0
*/

declare global {
  interface window {
    cordova: any
  }
}

window.cordova = window.cordova || {}
