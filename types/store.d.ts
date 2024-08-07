interface dpStore {

  /** Create a new store */
  readonly set: (name: string, param: any) => any

  /** Have back the data from a store */
  readonly get: (name: string) => any

  /** Delete a store */
  readonly delete: (name: string) => any

  /** Delete all storages */
  readonly clearAll: () => void

  /** Know how much space you have for total storages */
  readonly quota: () => void

  /** Get the size of stores an the total */
  readonly size: () => any

  // TOD
  // readonly increaseQuota: (value: number) => void
}

declare var store: dpStore
type store = dpStore

store = {}
