import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
@Injectable()
export class SidebarService {

  url:string="http://localhost:3000/menu/";
  constructor(public http:HttpClient) { }

  public getMenu(){
    if (localStorage.getItem('token') == null) {
    return this.http.get(this.url);
    }
    else {
      alert("you are not authorized user");
      window.location.replace('http://localhost:4200/login');
    }
  }

  public getSubMenu(id){
    if (localStorage.getItem('token') == null) {
    return this.http.get(this.url+id);
    }
    else {
      alert("you are not authorized user");
      window.location.replace('http://localhost:4200/login');
    }
  }
}
