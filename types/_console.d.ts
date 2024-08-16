interface _dpHelper extends _dpHelper {

  /**
   * Root
   * @return group of commands.
  */
  console: {
    /**
     * info
     * @return console log of paramenters.
    */
    info: (name: String, message: String, func: Function) => any
    /**
     * stop
     * @return stop all.
    */
    stop: (options?) => any
    /**
     * stop
     * @return stop all.
    */
    toHtml: (element: string) => any
  }

}
