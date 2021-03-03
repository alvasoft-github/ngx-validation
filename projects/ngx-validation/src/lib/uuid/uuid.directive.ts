import { Directive, Input, forwardRef, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { NG_VALIDATORS, Validator, ValidatorFn, AbstractControl } from '@angular/forms';

import { uuid } from './uuid.validator';

const UUID_VALIDATOR: any = {
	provide: NG_VALIDATORS,
	useExisting: forwardRef(() => UUIDValidator),
	multi: true
};

@Directive({
	selector: '[ngvUuid][formControlName],[ngvUuid][formControl],[ngvUuid][ngModel]',
	providers: [UUID_VALIDATOR]
})
export class UUIDValidator implements Validator, OnInit, OnChanges {
	@Input() uuid;

	private validator: ValidatorFn;
	private onChange: () => void;

	ngOnInit() {
		this.validator = uuid(this.uuid);
	}

	ngOnChanges(changes: SimpleChanges) {
		for (const key in changes) {
			if (key === 'uuid') {
				this.validator = uuid(changes[key].currentValue);
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
