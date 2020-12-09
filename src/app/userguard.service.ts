import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanLoad, Route, Router, RouterStateSnapshot } from '@angular/router';
import { EmployeedataService } from './employeedata.service';

@Injectable({
  providedIn: 'root'
})
export class UserguardService implements CanActivate,CanLoad {

  constructor(private _userdata:EmployeedataService,private _router:Router) { }

  canActivate(route:ActivatedRouteSnapshot,state:RouterStateSnapshot){

      return this.isUserLoggedIn(state.url);
  }
  
  canLoad(_route:Route){
    return this.isUserLoggedIn(_route.path);
  }

  isUserLoggedIn(url:string):boolean{

    if(this._userdata.isLoggedIn){
      return true;
    }
    this._userdata.redirectURL=url;
    this._router.navigate(['/']);
    return false;
  }
}

