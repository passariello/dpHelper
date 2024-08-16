interface _dpHelper extends _dpHelper {

  /**
   * dispatch
   * @return group of commands.
  */
  dispatch: {
    /**
     * info
     * @return console log of paramenters.
    */
    set: (name: any, value: any) => any
    /**
     * stop
     * @return stop all.
    */
    listen: (name: string, cb: any, flag?: any) => any
    /**
     * stop
     * @return stop all.
    */
    remove: (name: string) => any
  }

}
