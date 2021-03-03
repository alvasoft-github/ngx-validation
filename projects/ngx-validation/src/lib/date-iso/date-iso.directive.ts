import { Directive, forwardRef } from '@angular/core';
import { NG_VALIDATORS, Validator, AbstractControl } from '@angular/forms';

import { dateISO } from './date-iso.validator';

const DATE_ISO_VALIDATOR: any = {
	provide: NG_VALIDATORS,
	useExisting: forwardRef(() => DateISOValidator),
	multi: true
};

@Directive({
	selector: '[ngvDateISO][formControlName],[ngvDateISO][formControl],[ngvDateISO][ngModel]',
	providers: [DATE_ISO_VALIDATOR]
})
export class DateISOValidator implements Validator {
	validate(c: AbstractControl): { [key: string]: any } {
		return dateISO(c);
	}
}
