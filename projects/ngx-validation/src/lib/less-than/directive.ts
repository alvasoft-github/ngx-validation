import { Directive, forwardRef, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, Validator, ValidatorFn } from '@angular/forms';

import { lt } from './validator';

const LESS_THAN_VALIDATOR: any = {
    provide: NG_VALIDATORS,
    useExisting: forwardRef(() => LessThanValidatorDirective),
    multi: true
};

@Directive({
    selector: '[lt][formControlName],[lt][formControl],[lt][ngModel]',
    providers: [LESS_THAN_VALIDATOR],
    standalone: false
})
export class LessThanValidatorDirective implements Validator, OnInit, OnChanges {

    @Input()
    public lt: number;

    private validator: ValidatorFn;
    private onChange: () => void;

    public ngOnInit() {
        this.validator = lt(this.lt);
    }

    public ngOnChanges(changes: SimpleChanges) {
        for (const key in changes) {
            if (key === 'lt') {
                this.validator = lt(changes[key].currentValue);
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
