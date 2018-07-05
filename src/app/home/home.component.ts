import { Component, OnInit } from '@angular/core';
import { SignupService } from '../signup/signup.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  
  user_count:number=0;
  client_count:number;
  service_count:number;
  constructor(public _data:SignupService) { }

  ngOnInit() {
    //alert(localStorage.getItem("abc"));
    this._data.getCount(1).subscribe(
      (data:any)=>{
        console.log(data);
        this.user_count=data[0][""];
      },
      function(err){console.log(err);},
      function(){}
    );

    this._data.getCount(2).subscribe(
      (data:any)=>{
        console.log(data);
        this.client_count=data[0][""];
      },
      function(err){console.log(err);},
      function(){}
    );

    this._data.getCount(3).subscribe(
      (data:any)=>{
        console.log(data);
        this.service_count=data[0][""];
      },
      function(err){console.log(err);},
      function(){}
    );

    }

}
