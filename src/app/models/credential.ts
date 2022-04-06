/**
* Created by S73261 [Edwin Higberto Mamani Canaza] on 21/03/2022.
**/
export class Credential {
  unique_name: string;
  roles: string;
  politic: string;
  exp: number;

  constructor() {
    this.unique_name = '';
    this.roles = '';
    this.politic = '';
    this.exp = 0;
  }
}
