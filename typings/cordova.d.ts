/*
Copyright: © 2022 Dario Passariello <dariopassariello@gmail.com>
License: MIT
*/

declare global {
  interface window {
    cordova: any
  }
}

window.cordova = window.cordova || {}
