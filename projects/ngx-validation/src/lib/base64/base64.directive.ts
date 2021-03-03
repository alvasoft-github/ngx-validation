import { Directive, forwardRef } from '@angular/core';
import { NG_VALIDATORS, Validator, AbstractControl } from '@angular/forms';

import { base64 } from './base64.validator';

const BASE64_VALIDATOR: any = {
	provide: NG_VALIDATORS,
	useExisting: forwardRef(() => Base64Validator),
	multi: true
};

@Directive({
	selector: '[ngvBase64][formControlName],[ngvBase64][formControl],[ngvBase64][ngModel]',
	providers: [BASE64_VALIDATOR]
})
export class Base64Validator implements Validator {
	validate(c: AbstractControl): { [key: string]: any } {
		return base64(c);
	}
}
