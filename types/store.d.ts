/**
 * Create states using: store.set("example",{test:"test"})
*/
interface _store {

  /**
    * Create a new store
    *
    * @example
    * store.set("test","example") // or Array, Object, Number, Functions...
    *
    * @since dpHelper 0.0.1
    * @param name The String as name to define the store.
    * @param param The information taht you want to store (Any).
    * @return boolean
  */
  set(name: string, param: any): any

  /**
    * Have back the data from a store.
    *
    * @example
    * store.get("test")
    *
    * @since dpHelper 0.0.1
    * @param name The String as name to define the store.
  */
  get(name: string): any

  /**
    * Delete an existing store:
    *
    * @example
    * store.delete("test")
    *
    * @since dpHelper 0.0.1
    * @param name The String as name to define the store.
    * @return boolean
  */
  delete(name: string): any

  /**
    * Delete all storages
    *
    * @example
    * store.clearAll()
    *
    * @since dpHelper 0.0.1
    * @return boolean
  */
  clearAll(): any

  /**
    * Know how much space you have for total storages
    *
    * @example
    * store.quota()
    *
    * @since dpHelper 0.0.1
    * @return values
  */
  quota(): any

  /**
    * Get the size of stores an the total
    *
    * @example
    * store.size()
    *
    * @since dpHelper 0.0.1
    * @return dimension in kb
  */
  size(): any

  // TODO
  // readonly increaseQuota: (value: number) => void
}

declare var store: _store
type store = _store
