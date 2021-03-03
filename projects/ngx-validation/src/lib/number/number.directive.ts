import { Directive, forwardRef } from '@angular/core';
import { NG_VALIDATORS, Validator, AbstractControl } from '@angular/forms';

import { number } from './number.validator';

const NUMBER_VALIDATOR: any = {
	provide: NG_VALIDATORS,
	useExisting: forwardRef(() => NumberValidator),
	multi: true
};

@Directive({
	selector: '[ngvNumber][formControlName],[ngvNumber][formControl],[ngvNumber][ngModel]',
	providers: [NUMBER_VALIDATOR]
})
export class NumberValidator implements Validator {
	validate(c: AbstractControl): { [key: string]: any } {
		return number(c);
	}
}
