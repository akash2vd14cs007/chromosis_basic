import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { EmployeedataService } from '../employeedata.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  errorMessage: string;

  constructor(private route:Router, private _data:EmployeedataService) { }

  ngOnInit(): void {
  }
  
  login(f: NgForm) {
    // console.log(f.value);
      if (f && f.valid) {
     
      const password = f.form.value.password;
     
      console.log(password);
    } else {
      this.errorMessage = 'Please enter a user email and password.';
    }
    this._data.addEmployees(f);
    alert('suceessfully registered');
    this.route.navigate(['/']);
  }
}
