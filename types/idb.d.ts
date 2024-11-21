/*
Copyright: © 2019 Dario Passariello <dariopassariello@gmail.com>
License: MIT
*/

/**
* idb is indexedDB semplification by dphelper
* @return IndexedDB editing and maintain.
*/

interface _idb {
  [key: string]: any
}

declare var idb: _idb
declare var idbases: any

type idb = _idb
type idbases = Global
