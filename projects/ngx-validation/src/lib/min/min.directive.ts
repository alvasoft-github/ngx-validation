import { Directive, Input, forwardRef, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { NG_VALIDATORS, Validator, ValidatorFn, AbstractControl } from '@angular/forms';

import { min } from './min.validator';

const MIN_VALIDATOR: any = {
	provide: NG_VALIDATORS,
	useExisting: forwardRef(() => MinValidator),
	multi: true
};

@Directive({
	selector: '[ngvMin][formControlName],[ngvMin][formControl],[ngvMin][ngModel]',
	providers: [MIN_VALIDATOR]
})
export class MinValidator implements Validator, OnInit, OnChanges {
	@Input() min: number;

	private validator: ValidatorFn;
	private onChange: () => void;

	ngOnInit() {
		this.validator = min(this.min);
	}

	ngOnChanges(changes: SimpleChanges) {
		for (const key in changes) {
			if (key === 'min') {
				this.validator = min(changes[key].currentValue);
				if (this.onChange) {
					this.onChange();
				}
			}
		}
	}

	validate(c: AbstractControl): { [key: string]: any } {
		return this.validator(c);
	}

	registerOnValidatorChange(fn: () => void): void {
		this.onChange = fn;
	}
}
