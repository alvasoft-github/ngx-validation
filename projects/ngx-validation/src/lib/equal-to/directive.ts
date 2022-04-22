import { Directive, forwardRef, Input, OnInit } from '@angular/core';
import {
    AbstractControl, FormControl, NG_VALIDATORS, Validator, ValidatorFn
} from '@angular/forms';

import { equalTo } from './validator';

const EQUAL_TO_VALIDATOR: any = {
    provide: NG_VALIDATORS,
    useExisting: forwardRef(() => EqualToValidatorDirective),
    multi: true
};

@Directive({
    selector: '[equalTo][formControlName],[equalTo][formControl],[equalTo][ngModel]',
    providers: [EQUAL_TO_VALIDATOR]
})
export class EqualToValidatorDirective implements Validator, OnInit {

    @Input()
    public equalTo: FormControl;

    private validator: ValidatorFn;

    public ngOnInit() {
        this.validator = equalTo(this.equalTo);
    }

    public validate(c: AbstractControl): { [key: string]: any } {
        return this.validator(c);
    }
}
