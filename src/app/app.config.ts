import { environment } from './../environments/environment.prod';
import { Injectable, isDevMode } from '@angular/core';
import { HttpClient } from '@angular/common/http';

/**
* Created by S73261 [Edwin Higberto Mamani Canaza] on 21/03/2022.
**/
@Injectable()
export class AppConfigService {
  private config: any = null;

  constructor(private client: HttpClient) {}

  getConfig(key: any) {
    return this.config[key];
  }

  loadConfig() {
    const redirect = environment.production ? '/config/config.prod.json' : '/config/config.dev.json';
    return this.client.get(redirect)
      .toPromise()
      .then((data) => {
        this.config = data;
      })
      .catch((error) => {
        console.log('Config: ', error);
      });
  }
}
