/*
Copyright: © 2019 Dario Passariello <dariopassariello@gmail.com>
License: MIT
*/

/**
* Observer run a callback anytime the associated state going to change
* @return Execution of function after state change.
*/
interface _observer {

  /**
  * Generate your observer
  *
  * @example
  * observer("myState", Function)
  *
  * @since dpHelper 1.0.6
  */
  (stateName: string, callBack: any): any

  /**
  * List of active observers
  *
  * @example
  * observer.list()
  *
  * @since dpHelper 1.0.6
  */
  readonly list?: () => void

  /**
  * Remove the active observer (not the state)
  *
  * @example
  * observer.remove("myState")
  *
  * @since dpHelper 1.0.6
  */
  readonly remove?: (name: string, callBack: any, flag?: boolean) => void

}

declare var observer: _observer
type observer = _observer
