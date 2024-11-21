/**
* If you use only "state" you get the entire Proxy object
* @return Proxy Object of all states.
*/
interface _state {

  [key: string]: any

  /**
   * Delete entire state using: state.remove("test")
   *
   * @example
   * state.remove(stateName)
   *
   * @since dpHelper 0.0.1
   * @param stateName The name of the state for which you want to delete.
   * @return boolean.
   */
  readonly remove?: (stateName: string) => any

  /**
   * List all states using: state.list
   *
   * @example
   * state.list
   *
   * @since dpHelper 0.0.1
   * @return Object of all states (Not the Proxy).
   */
  readonly list?: (stateName: string) => any

  /**
  * Generate a message for "dpHelper Manage"
  * Note: FOR INTERNAL USE ONLY.
  * @since dpHelper 0.0.1
  */
  readonly mex?: any

}

/**
* Create states using: state.test = "example"
*
* @example
* state.myStuff = any
*
* @since dpHelper 0.0.1
* @param key The name of the state for which you want to modify the action.
* @return The previous values (Any).
* Important: Object is a Proxy.
*/
declare var state: _state
type state = _state
