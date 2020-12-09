import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BnNgIdleService } from 'bn-ng-idle';
import {ConfirmationService, MessageService,} from 'primeng/api';
import { Employee } from '../employee';
import { EmployeedataService } from '../employeedata.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss']
})
export class EmployeeComponent implements OnInit {

  visibleSidebar1;
updatedItem;
  arr: Employee[];
  searchText = '';
  constructor(private _data:EmployeedataService,private _router:Router, private  bnIdle: BnNgIdleService,
    private confirmationService: ConfirmationService,private messageService: MessageService) { 

    // this.bnIdle.startWatching(300).subscribe((res) => {
      
    //   if(res) {
    //       console.log("session expired");
       
    //       alert('session expired please login again');
    //       this.bnIdle.stopTimer();
    //       this._router.navigate(['/']);
    //      this.bnIdle.expired$;

    //   }
     
    // })

  }
  
  ngOnInit(): void {
    this.getAllEmpl();
  }
  
  getAllEmpl(){
    
      this.arr= this._data.getAllEmployees();
      console.log(this.arr);
   }
 
  onClickDelete(item) {
    this.confirmationService.confirm({
        message: 'Are you sure that you want to proceed?',
        header: 'Confirmation',
        icon: 'pi pi-exclamation-triangle',
        accept: () => {
          this._data.deleteEmployees(item);
             this.getAllEmpl();
             console.log(this.arr);
             this.messageService.add({severity:'info', summary:'Confirmed', detail:'Record deleted'});
        },
        reject: () => {
          this.messageService.add({severity:'info', summary:'Rejected', detail:'You have rejected'});  
          this._router.navigate(['/employee']);
          
        }
    });
}
  onClickEdit(i){
    this._router.navigate(['/edit'],{queryParams:{i}});
  }
 
}




























// UpdateItem() {
  //   let data = this.updatedItem;
  //   for (let i = 0; i < this.arr.length; i++) {
  //     if (i == data) {
  //       this.arr[i].fname = this.fname;
  //       this.arr[i].lname = this.lname ;
  //       this.arr[i].username=this.username;
  //       console.log(this.arr);

        
  //     }
  //   }

 // }

// getAllEmpl(){
//   this._data.getAllEmployees().subscribe(
//     (data:Employee[])=>{
//       this.arr=data;
//     }
//   );
// }
//  onEmployeeDelete(id : number){
//    this._data.deleteEmployee(id).subscribe(
//      (data:any)=>{
//        this.getAllEmpl();
//      }
     
//    );
//     }
//     onAddEmployee(item){
//       this._data.addEmployees(item).subscribe(
//           (data:any)=>{

//           }
//       );
//     }
//     onEditEmployee(id:number){
//       var all={
//         id: this.id,
//         fname:this.fname,
//         lname:this.lname,
//         username:this.username
//       };
//       this._data.editEmployees(all).subscribe(
//            (data:any)=>{
//              alert('updated');
//              this.getAllEmpl();
//            }
//       );
//     }
 
  // onLogin(){
   
  // }
//   onClickDelete(item){
//     if (confirm("Do you want to delete")){
//       console.log("Implement delete functionality here");
// this.arr.splice(this.arr.indexOf(item), 1);
//     }
//   }