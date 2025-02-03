import { Directive, forwardRef, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, Validator, ValidatorFn } from '@angular/forms';

import { maxDate } from './validator';

const MAX_DATE_VALIDATOR: any = {
    provide: NG_VALIDATORS,
    useExisting: forwardRef(() => MaxDateValidatorDirective),
    multi: true
};

@Directive({
    selector: '[maxDate][formControlName],[maxDate][formControl],[maxDate][ngModel]',
    providers: [MAX_DATE_VALIDATOR],
    standalone: false
})
export class MaxDateValidatorDirective implements Validator, OnInit, OnChanges {
    @Input()
    public maxDate: Date;

    private validator: ValidatorFn;
    private onChange: () => void;

    public ngOnInit() {
        this.validator = maxDate(this.maxDate);
    }

    public ngOnChanges(changes: SimpleChanges) {
        for (const key in changes) {
            if (key === 'maxDate') {
                this.validator = maxDate(changes[key].currentValue);
                if (this.onChange) {
                    this.onChange();
                }
            }
        }
    }

    public validate(c: AbstractControl): { [key: string]: any } {
        return this.validator(c);
    }

    public registerOnValidatorChange(fn: () => void): void {
        this.onChange = fn;
    }
}
