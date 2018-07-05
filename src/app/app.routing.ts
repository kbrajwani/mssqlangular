import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { UserComponent } from './user/user.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { LogoutComponent } from './logout/logout.component';
import { ClientRegisterComponent } from './client-register/client-register.component';
import { HdfcComponent } from "./hdfc/hdfc.component";
import { FineComponent } from "./fine/fine.component";
import { RitesComponent } from "./rites/rites.component";



const routes: Routes = [
  { path: 'Dashboard', component: HomeComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'login', component: LoginComponent },
  { path: 'logout', component: LogoutComponent },
  { path: 'User Profile', component: UserComponent },
  { path: 'Client Registration', component: ClientRegisterComponent },
  { path: 'HDFC Life Insuarance', component: HdfcComponent },
  { path: 'RITES', component: RitesComponent },
  { path: 'FINE', component: FineComponent },
  { path: '', redirectTo: 'login', pathMatch: 'full' }
];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
  ],
})
export class AppRoutingModule { }
