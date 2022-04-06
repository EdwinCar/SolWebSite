import { AppConfigService } from './../../app.config';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { AuthRequest } from 'src/app/models/request/auth-request';
import { IResponse } from 'src/app/models/i-response';
import { Observable } from 'rxjs';

/**
* Created by S73261 [Edwin Higberto Mamani Canaza] on 21/03/2022.
**/
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private credential: any;

  constructor(private client: HttpClient, private route: Router, private config: AppConfigService) {
    // this.credential =
  }

  login(authRequest: AuthRequest): Observable<IResponse> {
    return this.client.post<IResponse>(this.config.getConfig('BaseUrl') + this.config.getConfig('AuthUri'), authRequest);
  }

  logout() {
    sessionStorage.removeItem('currentUser');
    this.route.navigate(['/login']);
  }
}
