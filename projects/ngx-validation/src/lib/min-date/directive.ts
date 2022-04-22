import { Directive, forwardRef, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, Validator, ValidatorFn } from '@angular/forms';

import { minDate } from './validator';

const MIN_DATE_VALIDATOR: any = {
    provide: NG_VALIDATORS,
    useExisting: forwardRef(() => MinDateValidatorDirective),
    multi: true
};

@Directive({
    selector: '[minDate][formControlName],[minDate][formControl],[minDate][ngModel]',
    providers: [MIN_DATE_VALIDATOR]
})
export class MinDateValidatorDirective implements Validator, OnInit, OnChanges {

    @Input()
    public minDate: Date;

    private validator: ValidatorFn;
    private onChange: () => void;

    public ngOnInit() {
        this.validator = minDate(this.minDate);
    }

    public ngOnChanges(changes: SimpleChanges) {
        for (const key in changes) {
            if (key === 'minDate') {
                this.validator = minDate(changes[key].currentValue);
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
