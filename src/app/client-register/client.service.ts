import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import 'rxjs/add/operator/map';

@Injectable()
export class ClientService {

  url_register: string = "http://localhost:3000/client/";

  constructor(public http: HttpClient) { }
  addUser(item){
    if (localStorage.getItem('token') == null) {
    let body = JSON.stringify(item);
    
   return this.http.post(this.url_register, body,{headers:new HttpHeaders().set('Content-Type','application/json')} );
    }
    else {
      alert("you are not authorized user");
      window.location.replace('http://localhost:4200/login');
    }
  }

}
