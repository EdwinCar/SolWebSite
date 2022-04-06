import { Component, OnInit } from '@angular/core';
import { Credential } from 'src/app/models/credential';
import { AuthRequest } from 'src/app/models/request/auth-request';

/**
* Created by S73261 [Edwin Higberto Mamani Canaza] on 20/03/2022.
**/
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  // credential: Credential;
  // authRequest: AuthRequest;

  constructor() { }

  ngOnInit(): void {
  }

}
