import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from "@angular/common/http";

import { AppRoutingModule } from './app.routing';
import { NavbarModule } from './shared/navbar/navbar.module';
import { FooterModule } from './shared/footer/footer.module';
import { SidebarModule } from './sidebar/sidebar.module';

import { AppComponent } from './app.component';

import { HomeComponent } from './home/home.component';
import { UserComponent } from './user/user.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { LogoutComponent } from './logout/logout.component';


import { LoginService } from './login/login.service';
import { SignupService } from './signup/signup.service';
import { UpdateService } from './user/update.service';
import { SidebarService } from './sidebar/sidebar.service';
import { ClientRegisterComponent } from './client-register/client-register.component';
import { ClientService } from './client-register/client.service';
import { HdfcComponent } from './hdfc/hdfc.component';
import { FineComponent } from './fine/fine.component';
import { RitesComponent } from './rites/rites.component';




@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    UserComponent,
    LoginComponent,
    SignupComponent,
    LogoutComponent,
    ClientRegisterComponent,
    HdfcComponent,
    FineComponent,
    RitesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
   HttpClientModule,
    NavbarModule,
    FooterModule,
    SidebarModule,
    RouterModule,
    AppRoutingModule
  ],
  providers: [LoginService,SignupService,UpdateService,SidebarService,ClientService],
  bootstrap: [AppComponent]
})
export class AppModule { }
