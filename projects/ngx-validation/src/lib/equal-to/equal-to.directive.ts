import { Directive, Input, forwardRef, OnInit } from '@angular/core';
import { NG_VALIDATORS, Validator, FormControl, ValidatorFn, AbstractControl } from '@angular/forms';

import { equalTo } from './equal-to.validator';

const EQUAL_TO_VALIDATOR: any = {
	provide: NG_VALIDATORS,
	useExisting: forwardRef(() => EqualToValidator),
	multi: true
};

@Directive({
	selector: '[ngvEqualTo][formControlName],[ngvEqualTo][formControl],[ngvEqualTo][ngModel]',
	providers: [EQUAL_TO_VALIDATOR]
})
export class EqualToValidator implements Validator, OnInit {
	@Input() equalTo: FormControl;

	private validator: ValidatorFn;

	ngOnInit() {
		this.validator = equalTo(this.equalTo);
	}

	validate(c: AbstractControl): { [key: string]: any } {
		return this.validator(c);
	}
}
