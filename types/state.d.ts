/**
* If you use only "state" you get the entire Proxy object
* @return Proxy Object of all states.
*/
interface dpState {

  /**
   * Create states using: state.test = "example"
   * @since dpHelper 0.0.1
   * @param key The name of the state for which you want to modify the action.
   * @return The previous values (Any).
   * Important: Object is a Proxy.
   */
  [key: string]: any

  /**
   * Delete entire state using: state.remove("test")
   * @since dpHelper 0.0.1
   * @param stateName The name of the state for which you want to delete.
   * @return boolean.
   */
  readonly remove: (stateName: string) => any

  /**
   * List all states using: state.list
   * @since dpHelper 0.0.1
   * @return Object of all states (Not the Proxy).
   */
  readonly list: (stateName: string) => any

  /**
  * Generate a message for "dpHelper Manage"
  * @since dpHelper 0.0.1
  * Important: FOR INTERNAL USE ONLY.
  */
  readonly mex: (prop: { property: string, value: string }) => any

}

declare var state: dpState
type state = dpState

state = {}
