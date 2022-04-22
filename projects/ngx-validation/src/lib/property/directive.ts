import { Directive, forwardRef, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, Validator, ValidatorFn } from '@angular/forms';

import { property } from './validator';

const PROPERTY_VALIDATOR: any = {
    provide: NG_VALIDATORS,
    useExisting: forwardRef(() => PropertyValidatorDirective),
    multi: true
};

@Directive({
    selector: '[property][formControlName],[property][formControl],[property][ngModel]',
    providers: [PROPERTY_VALIDATOR]
})
export class PropertyValidatorDirective implements Validator, OnInit, OnChanges {

    @Input()
    public property: string;

    private validator: ValidatorFn;
    private onChange: () => void;

    public ngOnInit() {
        this.validator = property(this.property);
    }

    public ngOnChanges(changes: SimpleChanges) {
        for (const key in changes) {
            if (key === 'property') {
                this.validator = property(changes[key].currentValue);
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
