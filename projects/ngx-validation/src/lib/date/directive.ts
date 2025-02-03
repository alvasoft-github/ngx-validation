import { Directive, forwardRef } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, Validator } from '@angular/forms';

import { date } from './validator';

const DATE_VALIDATOR: any = {
    provide: NG_VALIDATORS,
    useExisting: forwardRef(() => DateValidatorDirective),
    multi: true
};

@Directive({
    selector: '[date][formControlName],[date][formControl],[date][ngModel]',
    providers: [DATE_VALIDATOR],
    standalone: false
})
export class DateValidatorDirective implements Validator {

    public validate(c: AbstractControl): { [key: string]: any } {
        return date(c);
    }
}
