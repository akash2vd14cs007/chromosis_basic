
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Employee } from './employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeedataService {

  arr:Employee[]=[
    new Employee( 'akash','patil','akash','1111'),
    new Employee('shekhar' ,'g','s12','22222'),
    new Employee('rahul','b','rahul123','3333'),
    new Employee('sagar','c','sagar45','4444'),
    new Employee('test','test','test','1234')
    
  ];
  // arr:Employee[]=[
  //   { fname:'akash',lname:'patil',username:'akash',password:'1111'},
  //   {fname:'shekhar' ,lname:'g',username:'sh',password:'22222'}
  
  // ];
  currentUser;
  redirectURL:string;
  searchText:string='';
  fname: string='';
  lname: string;
  username: string;
  password:string;
  value:string;
  updatedItem: any;


  constructor(private route:Router ) { 
 
  }
  
getAllEmployees(){
  return this.arr;
}
deleteEmployees(item){
  return this.arr.splice(item,1);
}

addEmployees(f){
  return this.arr.push(new Employee(f.value.fname,f.value.lname,f.value.username,f.value.password));
}

login(f){
console.log(this.arr);
let userAccepted = this.arr.filter(x=>x.username === f.value.username)
let user=this.arr.filter(y=>y.password === f.value.password);
  if(user.length && userAccepted.length === 1){
    this.currentUser = {
      username: f.value.username,
      password: f.value.password,
    };
    this.route.navigate(['/employee']);
    return 
      
  }else {
  return alert('Enter valid username and password');
 }
}
get isLoggedIn(): boolean {
  console.log(this.currentUser)
  return !!this.currentUser;
}
}






















// addEmployees(newemployee){
// let head= new HttpHeaders().set("Contenr-Type","application/json");
// let body= JSON.stringify(newemployee);
// return this.http.post(this.url,body,{headers:head});
// }
// getEmployeeById(id :number){
//   return this.http.get(this.url + id).pipe(
//     catchError(this.handleError)
//   );

// }
// editEmployees(newemployee){
//   let head= new HttpHeaders().set("Content-Type","application/json");
//   let body = JSON.stringify(newemployee);
//   return this.http.post(this.url+newemployee.id,body,{headers:head});

// }
// deleteEmployee(Id){
//   let head = new HttpHeaders().set("Content-Type","application/json");
//   return this.http.delete(this.url+Id,{headers:head});
//  }

// private handleError(ex:HttpErrorResponse){
//   if(ex.error instanceof ErrorEvent){
//     console.log('client side error',ex.message);
//   }
//   else{
//     console.log('server side error',ex.message);
//   }
//  return  throwError('something went wrong');
// }