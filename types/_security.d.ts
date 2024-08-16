
interface _dpHelper extends _dpHelper {

  security: {
    uuid: {
      v5: () => String
    },
    hashPass: (u, p) => Promise
    crypt: (u, p, monitored) => String
    deCrypt: (u, p, mode) => String
    AES_KeyGen: (passKey) => String
  }

}
