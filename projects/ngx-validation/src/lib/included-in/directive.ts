import { Directive, forwardRef, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, Validator, ValidatorFn } from '@angular/forms';

import { includedIn } from './validator';

const INCLUDED_IN_VALIDATOR: any = {
    provide: NG_VALIDATORS,
    useExisting: forwardRef(() => IncludedInValidatorDirective),
    multi: true
};

@Directive({
    selector: '[includedIn][formControlName],[includedIn][formControl],[includedIn][ngModel]',
    providers: [INCLUDED_IN_VALIDATOR],
    standalone: false
})
export class IncludedInValidatorDirective implements Validator, OnInit, OnChanges {

    @Input()
    public includedIn: Array<any>;

    private validator: ValidatorFn;
    private onChange: () => void;

    public ngOnInit() {
        this.validator = includedIn(this.includedIn);
    }

    public ngOnChanges(changes: SimpleChanges) {
        for (const key in changes) {
            if (key === 'includedIn') {
                this.validator = includedIn(changes[key].currentValue);
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
