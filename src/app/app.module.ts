import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BaseLoginComponent } from './views/core/base-login/base-login.component';
import { BaseHomeComponent } from './views/core/base-home/base-home.component';
import { LoginComponent } from './views/core/login/login.component';
import { DashboardComponent } from './views/core/dashboard/dashboard.component';
import { HeaderComponent } from './views/core/component/header/header.component';
import { FooterComponent } from './views/core/component/footer/footer.component';
import { SidebarComponent } from './views/core/component/sidebar/sidebar.component';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { BreadcrumbComponent } from './views/core/component/breadcrumb/breadcrumb.component';
import { ProfileComponent } from './views/core/component/profile/profile.component';

/**
 * Created by S73261 [Edwin Higberto Mamani Canaza] on 20/03/2022.
 **/
@NgModule({
  declarations: [
    AppComponent,
    BaseLoginComponent,
    BaseHomeComponent,
    LoginComponent,
    DashboardComponent,
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    BreadcrumbComponent,
    ProfileComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MatCardModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
