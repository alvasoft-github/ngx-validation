import { Directive, forwardRef, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, Validator, ValidatorFn } from '@angular/forms';

import { requiredIf } from './validator';

const REQUIRED_IF_VALIDATOR: any = {
    provide: NG_VALIDATORS,
    useExisting: forwardRef(() => RequiredIfValidatorDirective),
    multi: true
};

@Directive({
    selector: '[requiredIf][formControlName],[requiredIf][formControl],[requiredIf][ngModel]',
    providers: [REQUIRED_IF_VALIDATOR]
})
export class RequiredIfValidatorDirective implements Validator, OnInit, OnChanges {

    @Input()
    public predicateFn: () => boolean;

    private validator: ValidatorFn;
    private onChange: () => void;

    public ngOnInit() {
        this.validator = requiredIf(this.predicateFn);
    }

    public ngOnChanges(changes: SimpleChanges) {
        for (const key in changes) {
            if (key === 'predicateFn') {
                this.validator = requiredIf(changes[key].currentValue);
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
