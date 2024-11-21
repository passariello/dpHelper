interface _dpHelper extends _dpHelper {

  cookie: {
    /**
     * @return set cookie.
     * @example
     * dphelper.cookie.set({ name: "test", value: "just a text" })
     * @since dpHelper 1.0.6
    */
    set(pars: {
      name: any,
      value: any,
      time?: any,
      path?: "/",
      sameSite?: "Lax",
      secure?: "Secure" | "false"
    })
    /**
     * get
     * @return get cookie.
     *
     * @example
     * dphelper.cookie.get( name )
     *
     * @since dpHelper 1.0.6
    */
    get: (name: string) => any
    /**
     * delete
     * @return delete cookie.
     *
     * @example
     * dphelper.cookie.delete( name )
     *
     * @since dpHelper 1.0.6
    */
    delete: (name: string) => any
    /**
     * clearAll
     * @return remove All cookies.
     *
     * @example
     * dphelper.cookie.clearAll()
     *
     * @since dpHelper 1.0.6
    */
    clearAll: () => any
  }

}
