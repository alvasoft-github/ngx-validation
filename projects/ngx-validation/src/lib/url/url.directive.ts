import { Directive, forwardRef } from '@angular/core';
import { NG_VALIDATORS, Validator, AbstractControl } from '@angular/forms';

import { url } from './url.validator';

const URL_VALIDATOR: any = {
	provide: NG_VALIDATORS,
	useExisting: forwardRef(() => UrlValidator),
	multi: true
};

@Directive({
	selector: '[ngvUrl][formControlName],[ngvUrl][formControl],[ngvUrl][ngModel]',
	providers: [URL_VALIDATOR]
})
export class UrlValidator implements Validator {
	validate(c: AbstractControl): { [key: string]: any } {
		return url(c);
	}
}
