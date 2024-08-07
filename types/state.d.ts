interface dpState {
  [key: string]: any
  readonly mex: (prop: { property: string, value: string }) => any
  readonly list: (name: string) => any
  readonly remove: (name: string) => any
}

declare var state: dpState
type state = dpState

state = {}
