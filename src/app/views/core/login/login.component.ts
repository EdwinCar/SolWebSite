import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthRequest } from 'src/app/models/request/auth-request';

/**
 * Created by S73261 [Edwin Higberto Mamani Canaza] on 20/03/2022.
 **/
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  authRequest: AuthRequest;
  loginGroup!: FormGroup;

  constructor(private readonly formBuilder: FormBuilder) {
    this.authRequest = new AuthRequest();
  }

  ngOnInit(): void {
    this.loginGroup = this.onBuildForm();
  }

  onLogin(): void {
    console.log('click')
  }

  onMaskPassword($event: any): void {
    // const character = $event.value.split('').find(point => point !== '●');
  }

  onChangePassword(): void {

  }

  onBuildForm(): FormGroup {
    return this.formBuilder.group({
      userName: [this.authRequest.userName, [Validators.required, Validators.minLength(5), Validators.maxLength(10)]],
      password: [this.authRequest.maskPassword, [Validators.required, Validators.minLength(4), Validators.maxLength(40)]]
    });
  }
}
