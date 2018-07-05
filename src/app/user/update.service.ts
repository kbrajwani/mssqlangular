import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User_Class } from '../login/user';
import 'rxjs/add/operator/map';


@Injectable()
export class UpdateService {
  url_login: string = "http://localhost:3000/login/";
  constructor(public http: HttpClient) { }
  getUser(user) {
    if (localStorage.getItem('token') == null) {
      let body = JSON.stringify(user);
      return this.http.get(this.url_login + user.user_email + "/" + user.user_token);
    }
    else {
      alert("you are not authorized user");
      window.location.replace('http://localhost:4200/login');
    }
  }
  updateuser(user) {
    if (localStorage.getItem('token') == null) {
      let body = JSON.stringify(user);

      return this.http.put(this.url_login + user.user_email, body, { headers: new HttpHeaders().set('Content-Type', 'application/json') });
    }
    else {
      alert("you are not authorized user");
      window.location.replace('http://localhost:4200/login');
    }
  }

}
