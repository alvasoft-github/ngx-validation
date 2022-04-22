import { Directive, forwardRef } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, Validator } from '@angular/forms';

import { base64 } from './validator';

const BASE64_VALIDATOR: any = {
    provide: NG_VALIDATORS,
    useExisting: forwardRef(() => Base64ValidatorDirective),
    multi: true
};

@Directive({
    selector: '[base64][formControlName],[base64][formControl],[base64][ngModel]',
    providers: [BASE64_VALIDATOR]
})
export class Base64ValidatorDirective implements Validator {

    public validate(c: AbstractControl): { [key: string]: any } {
        return base64(c);
    }
}
