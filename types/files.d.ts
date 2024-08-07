/*
Copyright: © 2019 Dario Passariello <dariopassariello@gmail.com>
License: MIT
*/

declare module '*.htm'
declare module '*.html'

////////////////////////////////////////////////////////////////

declare module '*.js' {
  const value: any
  export default value
}

////////////////////////////////////////////////////////////////

declare module "*.svg" {
  const value: any
  export default value
}
