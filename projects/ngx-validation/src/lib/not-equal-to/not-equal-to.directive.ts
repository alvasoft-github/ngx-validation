import { Directive, Input, forwardRef, OnInit } from '@angular/core';
import { NG_VALIDATORS, Validator, FormControl, ValidatorFn, AbstractControl } from '@angular/forms';

import { notEqualTo } from './not-equal-to.validator';

const NOT_EQUAL_TO_VALIDATOR: any = {
	provide: NG_VALIDATORS,
	useExisting: forwardRef(() => NotEqualToValidator),
	multi: true
};

@Directive({
	selector: '[ngvNotEqualTo][formControlName],[ngvNotEqualTo][formControl],[ngvNotEqualTo][ngModel]',
	providers: [NOT_EQUAL_TO_VALIDATOR]
})
export class NotEqualToValidator implements Validator, OnInit {
	@Input() notEqualTo: FormControl;

	private validator: ValidatorFn;

	ngOnInit() {
		this.validator = notEqualTo(this.notEqualTo);
	}

	validate(c: AbstractControl): { [key: string]: any } {
		return this.validator(c);
	}
}
