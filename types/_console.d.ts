interface _dpHelper extends _dpHelper {

  console: {
    /**
     * info
     * @return console log of paramenters.
    */
    info?: (name: String, message: String, func: Function) => any
    /**
     * stop
     * @return stop all.
    */
    stop?: (options?: any) => any
    /**
     * stop
     * @return stop all.
    */
    toHtml?: (element: string) => any

    method?: any

    disableYellowBox?: any
  }

}
