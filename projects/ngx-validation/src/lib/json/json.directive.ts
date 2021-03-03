import { Directive, forwardRef } from '@angular/core';
import { NG_VALIDATORS, Validator, AbstractControl } from '@angular/forms';

import { json } from './json.validator';

const JSON_VALIDATOR: any = {
	provide: NG_VALIDATORS,
	useExisting: forwardRef(() => JSONValidator),
	multi: true
};

@Directive({
	selector: '[ngvJson][formControlName],[ngvJson][formControl],[ngvJson][ngModel]',
	providers: [JSON_VALIDATOR]
})
export class JSONValidator implements Validator {
	validate(c: AbstractControl): { [key: string]: any } {
		return json(c);
	}
}
