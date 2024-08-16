
interface _dpHelper extends _dpHelper {

  array: {
    find: (array: array, key: string) => any
    unique: (array: array) => any
    delete: (array: array, key: string) => any
    merge: (arrayA: array, arrayB: array) => any
    mergeByKey: (arrayA: array, arrayB: array, key: string) => any
    asc: (array: array) => any
    desc: (array: array) => any
    duplicates: (array: array) => any
    even: (array: array) => any
    odd: (array: array) => any
    toObj: (array: array) => any
    sumColumn: (array: [[]], column: number) => any
    shuffle: (array: array) => any
    testArrayInt: (num: number) => any

    generate: (num: number) => array
    rand32: (num: number) => array
  }

}
