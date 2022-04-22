import { Directive, forwardRef, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, Validator, ValidatorFn } from '@angular/forms';

import { lte } from './validator';

const LESS_THAN_EQUAL_VALIDATOR: any = {
    provide: NG_VALIDATORS,
    useExisting: forwardRef(() => LessThanEqualValidatorDirective),
    multi: true
};

@Directive({
    selector: '[lte][formControlName],[lte][formControl],[lte][ngModel]',
    providers: [LESS_THAN_EQUAL_VALIDATOR]
})
export class LessThanEqualValidatorDirective implements Validator, OnInit, OnChanges {

    @Input()
    public lte: number;

    private validator: ValidatorFn;
    private onChange: () => void;

    public ngOnInit() {
        this.validator = lte(this.lte);
    }

    public ngOnChanges(changes: SimpleChanges) {
        for (const key in changes) {
            if (key === 'lte') {
                this.validator = lte(changes[key].currentValue);
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
