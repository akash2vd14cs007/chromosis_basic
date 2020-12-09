import { LocationStrategy } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { BnNgIdleService } from 'bn-ng-idle';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'secondApp';
  
  constructor(
    private locationStrategy: LocationStrategy, public route:Router, private bnIdle: BnNgIdleService
  ) {
    history.pushState(null, null, location.href);// front navigation arrow mark disabled
    this.locationStrategy.onPopState(() => {
      history.pushState(null, null, location.href);
    })

   }
   logout(){
   this.bnIdle.expired$;
   this.route.navigate(['/']);
   }
  
}
