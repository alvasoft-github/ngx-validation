import { Directive, forwardRef, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, Validator, ValidatorFn } from '@angular/forms';

import { rangeLength } from './validator';

const RANGE_LENGTH_VALIDATOR: any = {
    provide: NG_VALIDATORS,
    useExisting: forwardRef(() => RangeLengthValidatorDirective),
    multi: true
};

@Directive({
    selector: '[rangeLength][formControlName],[rangeLength][formControl],[rangeLength][ngModel]',
    providers: [RANGE_LENGTH_VALIDATOR],
    standalone: false
})
export class RangeLengthValidatorDirective implements Validator, OnInit, OnChanges {

    @Input()
    public rangeLength: [number];

    private validator: ValidatorFn;
    private onChange: () => void;

    public ngOnInit() {
        this.validator = rangeLength(this.rangeLength);
    }

    public ngOnChanges(changes: SimpleChanges) {
        for (const key in changes) {
            if (key === 'rangeLength') {
                this.validator = rangeLength(changes[key].currentValue);
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
