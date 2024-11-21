/*
Copyright: © 2019 Dario Passariello <dariopassariello@gmail.com>
License: MIT
*/

/**
* Cache is used for internal use only... but you can use if you need.
* @return Some stuff you cache... usually used for dynamic imports from dpHelper.
*/
interface dpCache {

  /**
  * Create a cache, please use state instead!
  *
  * @example
  * cache.myCache = any
  *
  * @since dpHelper 1.0.6
  */
  [key: string]: any
}

declare var cache: dpCache
type cache = dpCache
