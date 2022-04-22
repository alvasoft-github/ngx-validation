import { Directive, forwardRef } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, Validator } from '@angular/forms';

import { email } from './validator';

const EMAIL_VALIDATOR: any = {
    provide: NG_VALIDATORS,
    useExisting: forwardRef(() => EmailValidatorDirective),
    multi: true
};

@Directive({
    selector: '[ngvemail][formControlName],[ngvemail][formControl],[ngvemail][ngModel]',
    providers: [EMAIL_VALIDATOR]
})
export class EmailValidatorDirective implements Validator {

    public validate(c: AbstractControl): { [key: string]: any } {
        return email(c);
    }
}
