import { Directive, forwardRef } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, Validator } from '@angular/forms';

import { digits } from './validator';

const DIGITS_VALIDATOR: any = {
    provide: NG_VALIDATORS,
    useExisting: forwardRef(() => DigitsValidatorDirective),
    multi: true
};

@Directive({
    selector: '[digits][formControlName],[digits][formControl],[digits][ngModel]',
    providers: [DIGITS_VALIDATOR],
    standalone: false
})
export class DigitsValidatorDirective implements Validator {

    public validate(c: AbstractControl): { [key: string]: any } {
        return digits(c);
    }
}
