/**
 * Created by S73261 [Edwin Higberto Mamani Canaza] on 20/03/2022.
 **/
export class AuthRequest {
  userName: string;
  password: string;
  maskPassword: string;

  constructor() {
    this.userName = '';
    this.password = '';
    this.maskPassword = '';
  }
}
