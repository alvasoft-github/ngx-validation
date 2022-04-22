import { Directive, forwardRef, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, Validator, ValidatorFn } from '@angular/forms';

import { gte } from './validator';

const GREATER_THAN_EQUAL_VALIDATOR: any = {
    provide: NG_VALIDATORS,
    useExisting: forwardRef(() => GreaterThanEqualValidatorDirective),
    multi: true
};

@Directive({
    selector: '[gte][formControlName],[gte][formControl],[gte][ngModel]',
    providers: [GREATER_THAN_EQUAL_VALIDATOR]
})
export class GreaterThanEqualValidatorDirective implements Validator, OnInit, OnChanges {

    @Input()
    public gte: number;

    private validator: ValidatorFn;
    private onChange: () => void;

    public ngOnInit() {
        this.validator = gte(this.gte);
    }

    public ngOnChanges(changes: SimpleChanges) {
        for (const key in changes) {
            if (key === 'gte') {
                this.validator = gte(changes[key].currentValue);
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
