/*
Copyright: © 2019 Dario Passariello <dariopassariello@gmail.com>
License: MIT
*/

////////////////////
// Global object
////////////////////

/**
* @return dpHelper Root.
*/
interface _dpHelper {
  /**
   * Set parameter in dphelper
   * @param key Name of main function.
   * @return The values.
   */
  [key: string]: any

  // _list: {
  //   scripts: any
  //   sockets: any
  // }

}

declare var dphelper: _dpHelper
type dphelper = _dpHelper
type process = {}

//////////////////////////////////////////////////////////////////////////////////
// EXTRA

/*******************************************************************************/
// OVERRIDE CONFIRM FUNCTION

declare function confirm(message: string, func1: Function, func2?: Function): boolean

///////////////////
