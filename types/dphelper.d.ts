/*
Copyright: © 2019 Dario Passariello <dariopassariello@gmail.com>
License: MIT
*/

declare module 'dphelper' { }

declare var
  dphelper: any,
  api: any

dphelper = {}
api = {}

// OVERRIDE CONFIRM FUNCTION
declare function confirm(message?: string, func?: func, func?: func): boolean

type dphelper = { [key: Any]: Any }
type api = { [key: string]: Any }
