interface dpObserver {
  (stateName: string, callBack): Any
  readonly list: () => void
  readonly remove: (name: string, callBack, flag?: bool[]) => void
}

declare var observer: dpObserver
type observer = dpObserver

observer = {}
