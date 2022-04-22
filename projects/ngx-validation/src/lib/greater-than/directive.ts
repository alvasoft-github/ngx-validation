import { Directive, forwardRef, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, Validator, ValidatorFn } from '@angular/forms';

import { gt } from './validator';

const GREATER_THAN_VALIDATOR: any = {
    provide: NG_VALIDATORS,
    useExisting: forwardRef(() => GreaterThanValidatorDirective),
    multi: true
};

@Directive({
    selector: '[gt][formControlName],[gt][formControl],[gt][ngModel]',
    providers: [GREATER_THAN_VALIDATOR]
})
export class GreaterThanValidatorDirective implements Validator, OnInit, OnChanges {

    @Input()
    public gt: number;

    private validator: ValidatorFn;
    private onChange: () => void;

    public ngOnInit() {
        this.validator = gt(this.gt);
    }

    public ngOnChanges(changes: SimpleChanges) {
        for (const key in changes) {
            if (key === 'gt') {
                this.validator = gt(changes[key].currentValue);
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
