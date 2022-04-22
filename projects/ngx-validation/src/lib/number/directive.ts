import { Directive, forwardRef } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, Validator } from '@angular/forms';

import { number } from './validator';

const NUMBER_VALIDATOR: any = {
    provide: NG_VALIDATORS,
    useExisting: forwardRef(() => NumberValidatorDirective),
    multi: true
};

@Directive({
    selector: '[number][formControlName],[number][formControl],[number][ngModel]',
    providers: [NUMBER_VALIDATOR]
})
export class NumberValidatorDirective implements Validator {

    public validate(c: AbstractControl): { [key: string]: any } {
        return number(c);
    }
}
