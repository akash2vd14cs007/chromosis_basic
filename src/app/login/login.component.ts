import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EmployeedataService } from '../employeedata.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
username:string;
password:string;
  constructor(private _data:EmployeedataService,private route:Router) { }
 
  ngOnInit(): void {
  }
  onSubmit(f) {
   console.log(f.value);
  this._data.login(f);
  
  
 }
}
