import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ConfirmationService, MessageService } from 'primeng/api';
import { EmployeedataService } from '../employeedata.service';

@Component({
  selector: 'app-addemployee',
  templateUrl: './addemployee.component.html',
  styleUrls: ['./addemployee.component.scss']
})
export class AddemployeeComponent implements OnInit {
  errorMessage: string;

  constructor(private _data:EmployeedataService,private route:Router,private messageService: MessageService,confirmationService: ConfirmationService) { }

  ngOnInit(): void {
  }
  onSave(f){
    if (f && f.valid) {
     
      const password = f.form.value.password;
     
      console.log(password);
    } else {
      this.errorMessage = 'Please enter a user email and password.';
    }
    console.log(f.value);
    this._data.addEmployees(f);
    this.messageService.add({severity:'success', summary: 'Success', detail: 'Record added successfully'});
          // this.route.navigate(['/employee']);
        
       
            this.messageService.add({key: 'c', sticky: true, severity:'warn', summary:'Do you want to Navigate back to home page?', detail:'Confirm to proceed'});
        
  }
  onConfirm() {
    this.messageService.clear('c');
    this.route.navigate(['/employee']);
}
onReject() {
  this.messageService.clear('c');
}

clear() {
  this.messageService.clear();
}
}
