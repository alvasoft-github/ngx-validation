import { Directive, forwardRef, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, Validator, ValidatorFn } from '@angular/forms';

import { notEqual } from './validator';

const NOT_EQUAL_VALIDATOR: any = {
    provide: NG_VALIDATORS,
    useExisting: forwardRef(() => NotEqualValidatorDirective),
    multi: true
};

@Directive({
    selector: '[notEqual][formControlName],[notEqual][formControl],[notEqual][ngModel]',
    providers: [NOT_EQUAL_VALIDATOR]
})
export class NotEqualValidatorDirective implements Validator, OnInit, OnChanges {

    @Input()
    public notEqual: any;

    private validator: ValidatorFn;
    private onChange: () => void;

    public ngOnInit() {
        this.validator = notEqual(this.notEqual);
    }

    public ngOnChanges(changes: SimpleChanges) {
        for (const key in changes) {
            if (key === 'notEqual') {
                this.validator = notEqual(changes[key].currentValue);
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
