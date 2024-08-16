/*
Copyright: © 2019 Dario Passariello <dariopassariello@gmail.com>
License: MIT
*/

/**
* Cache is used for internal use only... but you can use if you need.
* @return Some stuff you cache... usually used for dynamic imports from dpHelper.
*/
interface dpCache {
  [key: string]: any
}

declare var cache: dpCache
type cache = dpCache

cache = {}
