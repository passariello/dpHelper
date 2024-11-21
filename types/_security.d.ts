
interface _dpHelper extends _dpHelper {

  security: {
    uuid: {
      v5: () => String
    },
    hashPass: (u: any, p: any) => any
    crypt: (u: any, p: any, monitored: any) => String
    deCrypt: (u: any, p: any, mode: any) => String
    AES_KeyGen: (passKey: any) => String
  }
}
