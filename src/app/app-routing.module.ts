import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddemployeeComponent } from './addemployee/addemployee.component';
import { EditemployeeComponent } from './editemployee/editemployee.component';
import { EmployeeComponent } from './employee/employee.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { UserguardService } from './userguard.service';
const routes: Routes = [
  {path:'',component:LoginComponent},
  {path:'employee',canActivate:[UserguardService],component:EmployeeComponent},
  {path:'add',canActivate:[UserguardService],component:AddemployeeComponent},
  {path:'edit',canActivate:[UserguardService],component:EditemployeeComponent},
  {path:'register',component:RegisterComponent},
  { path: '**', redirectTo: '' }
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
