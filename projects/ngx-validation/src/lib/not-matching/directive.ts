import { Directive, forwardRef, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, Validator, ValidatorFn } from '@angular/forms';

import { notMatching } from './validator';

const NOT_MATCHING_VALIDATOR: any = {
    provide: NG_VALIDATORS,
    useExisting: forwardRef(() => NotMatchingValidatorDirective),
    multi: true
};

@Directive({
    selector: '[notMatching][formControlName],[notMatching][formControl],[notMatching][ngModel]',
    providers: [NOT_MATCHING_VALIDATOR]
})
export class NotMatchingValidatorDirective implements Validator, OnInit, OnChanges {

    @Input()
    public notMatching: string | RegExp;

    private validator: ValidatorFn;
    private onChange: () => void;

    public ngOnInit() {
        this.validator = notMatching(this.notMatching);
    }

    public ngOnChanges(changes: SimpleChanges) {
        for (const key in changes) {
            if (key === 'notMatching') {
                this.validator = notMatching(changes[key].currentValue);
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
