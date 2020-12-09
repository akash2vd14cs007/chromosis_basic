import { Attribute, Directive, Input } from '@angular/core';
import { FormControl, FormGroup, NG_VALIDATORS, ValidationErrors, Validator } from '@angular/forms';
import { Subscription } from 'rxjs';


@Directive({
  selector: '[appMustMatch]',
  providers: [{ provide: NG_VALIDATORS, useExisting: MustMatchDirective, multi: true }]
})
export class MustMatchDirective implements Validator {
  constructor(@Attribute('appMustMatch') public PasswordControl: string) { }  
  
  validate(c: FormControl) {  
  
    const Password = c.root.get(this.PasswordControl);  
    const ConfirmPassword = c;  
  
    if (ConfirmPassword.value === null) {  
      return null;  
    }  
  
    if (Password) {  
      const subscription: Subscription = Password.valueChanges.subscribe(() => {  
        ConfirmPassword.updateValueAndValidity();  
        subscription.unsubscribe();  
      });  
    }  
    return Password && Password.value !== ConfirmPassword.value ? { passwordMatchError: true } : null;  
  }  
  
}
