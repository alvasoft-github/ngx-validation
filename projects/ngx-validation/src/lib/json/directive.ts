import { Directive, forwardRef } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, Validator } from '@angular/forms';

import { json } from './validator';

const JSON_VALIDATOR: any = {
    provide: NG_VALIDATORS,
    useExisting: forwardRef(() => JSONValidatorDirective),
    multi: true
};

@Directive({
    selector: '[json][formControlName],[json][formControl],[json][ngModel]',
    providers: [JSON_VALIDATOR]
})
export class JSONValidatorDirective implements Validator {

    public validate(c: AbstractControl): { [key: string]: any } {
        return json(c);
    }
}
