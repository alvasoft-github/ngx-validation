import { Directive, forwardRef, Input, OnInit } from '@angular/core';
import {
    AbstractControl, UntypedFormControl, NG_VALIDATORS, Validator, ValidatorFn
} from '@angular/forms';

import { notEqualTo } from './validator';

const NOT_EQUAL_TO_VALIDATOR: any = {
    provide: NG_VALIDATORS,
    useExisting: forwardRef(() => NotEqualToValidatorDirective),
    multi: true
};

@Directive({
    selector: '[notEqualTo][formControlName],[notEqualTo][formControl],[notEqualTo][ngModel]',
    providers: [NOT_EQUAL_TO_VALIDATOR],
    standalone: false
})
export class NotEqualToValidatorDirective implements Validator, OnInit {

    @Input()
    public notEqualTo: UntypedFormControl;

    private validator: ValidatorFn;

    public ngOnInit() {
        this.validator = notEqualTo(this.notEqualTo);
    }

    public validate(c: AbstractControl): { [key: string]: any } {
        return this.validator(c);
    }
}
