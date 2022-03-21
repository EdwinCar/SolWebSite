import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BaseLoginComponent } from './views/core/base-login/base-login.component';
import { LoginComponent } from './views/core/login/login.component';

const routes: Routes = [
  {
    path: 'login',
    component: BaseLoginComponent,
    children: [{ path: '', component: LoginComponent }],
  },
];

/**
 * Created by S73261 [Edwin Higberto Mamani Canaza] on 20/03/2022.
 **/
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
