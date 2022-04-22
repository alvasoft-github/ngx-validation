import { Directive, forwardRef } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, Validator } from '@angular/forms';

import { dateISO } from './validator';

const DATE_ISO_VALIDATOR: any = {
    provide: NG_VALIDATORS,
    useExisting: forwardRef(() => DateISOValidatorDirective),
    multi: true
};

@Directive({
    selector: '[dateISO][formControlName],[dateISO][formControl],[dateISO][ngModel]',
    providers: [DATE_ISO_VALIDATOR]
})
export class DateISOValidatorDirective implements Validator {

    public validate(c: AbstractControl): { [key: string]: any } {
        return dateISO(c);
    }
}
