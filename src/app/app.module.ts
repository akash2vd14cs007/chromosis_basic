import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeeComponent } from './employee/employee.component';
import { CommonModule } from '@angular/common';
import { HttpClientModule} from '@angular/common/http';
import { EditemployeeComponent } from './editemployee/editemployee.component';
import { AddemployeeComponent } from './addemployee/addemployee.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { FilterPipe } from './filter.pipe';
import { BnNgIdleService } from 'bn-ng-idle';
import { MustMatchDirective } from './must-match.directive';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ConfirmationService, MessageService } from 'primeng/api';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {TooltipModule} from 'primeng/tooltip';
import {SidebarModule} from 'primeng/sidebar';
import { ButtonModule } from 'primeng/button';
import {ToastModule} from 'primeng/toast';
import { CountdownModule } from 'ngx-countdown';
 
@NgModule({
  declarations: [
    AppComponent,
    EmployeeComponent,
    EditemployeeComponent,
    AddemployeeComponent,
    LoginComponent,
    RegisterComponent,
    FilterPipe,
    MustMatchDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    ConfirmDialogModule,
    BrowserAnimationsModule,
    TooltipModule,
    SidebarModule,
   ButtonModule,
   ToastModule,
   CountdownModule
   
  ],
  providers: [BnNgIdleService,ConfirmationService,MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
