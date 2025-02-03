import { Directive, forwardRef, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, Validator, ValidatorFn } from '@angular/forms';

import { notIncludedIn } from './validator';

const NOT_INCLUDED_IN_VALIDATOR: any = {
    provide: NG_VALIDATORS,
    useExisting: forwardRef(() => NotIncludedInValidatorDirective),
    multi: true
};

@Directive({
    selector: '[notIncludedIn][formControlName],[notIncludedIn][formControl],[notIncludedIn][ngModel]',
    providers: [NOT_INCLUDED_IN_VALIDATOR],
    standalone: false
})
export class NotIncludedInValidatorDirective implements Validator, OnInit, OnChanges {

    @Input()
    public notIncludedIn: Array<any>;

    private validator: ValidatorFn;
    private onChange: () => void;

    public ngOnInit() {
        this.validator = notIncludedIn(this.notIncludedIn);
    }

    public ngOnChanges(changes: SimpleChanges) {
        for (const key in changes) {
            if (key === 'notIncludedIn') {
                this.validator = notIncludedIn(changes[key].currentValue);
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
