import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User_Class } from './user';
import 'rxjs/add/operator/map';

@Injectable()
export class LoginService {
  url_login: string = "http://localhost:3000/login/";
  url_token: string = "http://localhost:3000/token/";
  constructor(public http: HttpClient, public htp: Http) { }

  getUser() {
    if (localStorage.getItem('token') == null) {
      return this.http.get(this.url_login);
    }
    else {
      alert("you are not authorized user");
      window.location.replace('http://localhost:4200/login');
    }
  }
  checkuser(user) {
    if (localStorage.getItem('token') == null) {
      let body = JSON.stringify(user);

      return this.http.post(this.url_login, body, { headers: new HttpHeaders().set('Content-Type', 'application/json') });
    }
    else {
      alert("you are not authorized user");
      window.location.replace('http://localhost:4200/login');
    }
  }
  token(email) {
    if (localStorage.getItem('token') == null) {
      return this.http.put(this.url_token + email, { headers: new HttpHeaders().set('Content-Type', 'application/json') });
    }
    else {
      alert("you are not authorized user");
      window.location.replace('http://localhost:4200/login');
    }
  }
  updateuser(user) {
    if (localStorage.getItem('token') == null) {
      let body = JSON.stringify(user);

      return this.http.put(this.url_login + user.UserId, body, { headers: new HttpHeaders().set('Content-Type', 'application/json') });
    }
    else {
      alert("you are not authorized user");
      window.location.replace('http://localhost:4200/login');
    }
  }
}
