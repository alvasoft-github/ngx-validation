import { Directive, forwardRef } from '@angular/core';
import { NG_VALIDATORS, Validator, AbstractControl } from '@angular/forms';

import { digits } from './digits.validator';

const DIGITS_VALIDATOR: any = {
	provide: NG_VALIDATORS,
	useExisting: forwardRef(() => DigitsValidator),
	multi: true
};

@Directive({
	selector: '[ngvDigits][formControlName],[ngvDigits][formControl],[ngvDigits][ngModel]',
	providers: [DIGITS_VALIDATOR]
})
export class DigitsValidator implements Validator {
	validate(c: AbstractControl): { [key: string]: any } {
		return digits(c);
	}
}
