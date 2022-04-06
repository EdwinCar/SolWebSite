/**
* Created by S73261 [Edwin Higberto Mamani Canaza] on 21/03/2022.
**/
export class Crypto {
  static key = '$ecr3t03dw1n&h1g63r70m4m4n1C4n4zA';

  static encrypt(data: any): string {
    try {
      const tes = JSON.stringify(data);
      return tes.toString();
      // return CryptoJS.AES.encrypt(JSON.stringify(data), this.key).toString();
    } catch (ex) {
      console.log(ex);
      return '';
    }
  }

  static decrypt(data: string): any {
    // const bytes = CryptoJS.AES.decrypt(data, this.key);
    // if (bytes.toString()) {
      return JSON.parse(data);
    // }
    // return data;
  }
}
