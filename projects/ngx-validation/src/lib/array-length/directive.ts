import { Directive, forwardRef, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, Validator, ValidatorFn } from '@angular/forms';

import { arrayLength } from './validator';

const ARRAY_LENGTH_VALIDATOR: any = {
    provide: NG_VALIDATORS,
    useExisting: forwardRef(() => ArrayLengthValidatorDirective),
    multi: true
};

@Directive({
    selector: '[arrayLength][formControlName],[arrayLength][formControl],[arrayLength][ngModel]',
    providers: [ARRAY_LENGTH_VALIDATOR],
    standalone: false
})
export class ArrayLengthValidatorDirective implements Validator, OnInit, OnChanges {

    @Input()
    public arrayLength: number;

    private validator: ValidatorFn;
    private onChange: () => void;

    public ngOnInit() {
        this.validator = arrayLength(this.arrayLength);
    }

    public ngOnChanges(changes: SimpleChanges) {
        for (const key in changes) {
            if (key === 'arrayLength') {
                this.validator = arrayLength(changes[key].currentValue);
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
