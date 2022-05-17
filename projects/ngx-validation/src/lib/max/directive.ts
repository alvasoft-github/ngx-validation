import { Directive, forwardRef, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, Validator, ValidatorFn } from '@angular/forms';

import { max } from './validator';

const MAX_VALIDATOR: any = {
    provide: NG_VALIDATORS,
    useExisting: forwardRef(() => MaxValidatorDirective),
    multi: true
};

@Directive({
    selector: '[max][formControlName],[max][formControl],[max][ngModel]',
    providers: [MAX_VALIDATOR]
})
export class MaxValidatorDirective implements Validator, OnInit, OnChanges {

    @Input()
    public max: number;

    private validator: ValidatorFn;
    private onChange: () => void;

    public ngOnInit() {
        this.validator = max(this.max);
    }

    public ngOnChanges(changes: SimpleChanges) {
        for (const key in changes) {
            if (key === 'max') {
                this.validator = max(changes[key].currentValue);
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
