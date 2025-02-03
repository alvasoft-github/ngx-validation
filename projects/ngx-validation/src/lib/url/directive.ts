import { Directive, forwardRef } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, Validator } from '@angular/forms';

import { url } from './validator';

const URL_VALIDATOR: any = {
    provide: NG_VALIDATORS,
    useExisting: forwardRef(() => UrlValidatorDirective),
    multi: true
};

@Directive({
    selector: '[url][formControlName],[url][formControl],[url][ngModel]',
    providers: [URL_VALIDATOR],
    standalone: false
})
export class UrlValidatorDirective implements Validator {

    public validate(c: AbstractControl): { [key: string]: any } {
        return url(c);
    }
}
