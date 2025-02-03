import { Directive, forwardRef } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, Validator } from '@angular/forms';

import { creditCard } from './validator';

const CREDIT_CARD_VALIDATOR: any = {
    provide: NG_VALIDATORS,
    useExisting: forwardRef(() => CreditCardValidatorDirective),
    multi: true
};

@Directive({
    selector: '[creditCard][formControlName],[creditCard][formControl],[creditCard][ngModel]',
    providers: [CREDIT_CARD_VALIDATOR],
    standalone: false
})
export class CreditCardValidatorDirective implements Validator {

    public validate(c: AbstractControl): { [key: string]: any } {
        return creditCard(c);
    }
}
