import { Component, OnInit } from '@angular/core';
import { Client_Class } from './client';
import { Router } from '@angular/router';
import { ClientService } from './client.service';

@Component({
  selector: 'app-client-register',
  templateUrl: './client-register.component.html',
  styleUrls: ['./client-register.component.scss']
})
export class ClientRegisterComponent implements OnInit {

  email:string;
  mobile:string;
  name:string;


  constructor(public _router:Router,public data:ClientService) { }

  ngOnInit() {
  }
  insert(){
  this.data.addUser(new Client_Class(this.email,this.name,this.mobile,'')).subscribe(
    (data:any)=>{
      this.email="";
      this.name="";
      this.mobile="";
      alert("Registered successfully");
    this._router.navigate(['/register']);},   
      function(error){alert("Try Again");},			
       function(){
      
      }			
      );
      
  }
}
