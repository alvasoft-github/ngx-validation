import { Directive, forwardRef } from '@angular/core';
import { NG_VALIDATORS, Validator, AbstractControl } from '@angular/forms';

import { date } from './date.validator';

const DATE_VALIDATOR: any = {
	provide: NG_VALIDATORS,
	useExisting: forwardRef(() => DateValidator),
	multi: true
};

@Directive({
	selector: '[ngvDate][formControlName],[ngvDate][formControl],[ngvDate][ngModel]',
	providers: [DATE_VALIDATOR]
})
export class DateValidator implements Validator {
	validate(c: AbstractControl): { [key: string]: any } {
		return date(c);
	}
}
