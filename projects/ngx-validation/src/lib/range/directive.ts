import { Directive, forwardRef, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, Validator, ValidatorFn } from '@angular/forms';

import { range } from './validator';

const RANGE_VALIDATOR: any = {
    provide: NG_VALIDATORS,
    useExisting: forwardRef(() => RangeValidatorDirective),
    multi: true
};

@Directive({
    selector: '[range][formControlName],[range][formControl],[range][ngModel]',
    providers: [RANGE_VALIDATOR]
})
export class RangeValidatorDirective implements Validator, OnInit, OnChanges {

    @Input()
    public range: [number];

    private validator: ValidatorFn;
    private onChange: () => void;

    public ngOnInit() {
        this.validator = range(this.range);
    }

    public ngOnChanges(changes: SimpleChanges) {
        for (const key in changes) {
            if (key === 'range') {
                this.validator = range(changes[key].currentValue);
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
