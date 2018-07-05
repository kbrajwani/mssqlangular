import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User_Class } from '../login/user';
import 'rxjs/add/operator/map';


@Injectable()
export class SignupService {
  url_login: string = "http://localhost:3000/signup/";



  constructor(public http: HttpClient) { }

  addUser(user) {
    if (localStorage.getItem('token') == null) {
      let body = JSON.stringify(user);

      return this.http.post(this.url_login, body, { headers: new HttpHeaders().set('Content-Type', 'application/json') });
    }
    else {
      alert("you are not authorized user");
      window.location.replace('http://localhost:4200/login');
    }
  }
  getCount(flag) {
    if (localStorage.getItem('token') == null) {
      return this.http.get(this.url_login + flag);
    }
    else {
      alert("you are not authorized user");
      window.location.replace('http://localhost:4200/login');
    }
  }
}
