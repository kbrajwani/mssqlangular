import { Component, OnInit } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { LoginService } from './login.service';
import { User_Class } from './user';
import { Router } from '@angular/router';
import { Jsonp } from '@angular/http';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(public _router:Router,public data:LoginService) { }
 email_id:string;
 password:string;
 arr:any;

 str:string;
  ngOnInit() {
    this.data.getUser().subscribe(
      (x)=>{
alert(x);
alert(JSON.stringify(x));

      },
      function(error){alert("error");},			
        function(){
      }			

    );
  }
  checkuser(){

    this.data.checkuser(new User_Class(this.email_id,this.password,'','')).subscribe(
      (x:any[])=>{
        this.arr=JSON.stringify(x);
        this.arr=JSON.parse(this.arr);
        alert(this.arr);
        if (x.length==1) {
          localStorage.setItem('Email',this.email_id);
          console.log(this.email_id);
        this._router.navigate(['/dashboard']);
          
        }
        else {
          
         alert("Something Wrong");
        }
          
      },
       
        function(error){alert("error");},			
        function(){
      }			
      );
  }

}
