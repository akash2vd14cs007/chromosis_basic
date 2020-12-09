import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { EmployeedataService } from '../employeedata.service';
@Component({
  selector: 'app-editemployee',
  templateUrl: './editemployee.component.html',
  styleUrls: ['./editemployee.component.scss']
})
export class EditemployeeComponent implements OnInit {
  
  username:string='';
  fname:string='';
  lname:string='';
  arr:any;
 value:any;
  updatedItem: any;
  password:string;
  confirmpassword:string;
 constructor(
  private _actroute: ActivatedRoute,private _data:EmployeedataService,private route:Router
) {}

ngOnInit() {
  this._actroute.queryParams.subscribe(
    (x)=>{
      this.value=x.i;
      console.log(this.value);
      this.arr=this._data.getAllEmployees();
      this.fname = this.arr[this.value].fname;
      this.lname = this.arr[this.value].lname;
      this.username=this.arr[this.value].username;
      this.password=this.arr[this.value].password;
    
  
      this.updatedItem = this.value; //assigning index to a variable
    }
  );
}
onSubmit() {
    let k = this.updatedItem;
    for (let i = 0; i < this.arr.length; i++) {
      // console.log(i);
       if (i == k) {
       this.arr[this.value].fname = this.fname;
       this.arr[this.value].lname = this.lname ;
      this.arr[this.value].username=this.username;
      this.arr[this.value].password=this.password;
      console.log(this.arr);
         this._data.getAllEmployees();
         alert('successfully updated')  ;
         this.route.navigate(['/employee']);
      }
     }

  }
  

}
