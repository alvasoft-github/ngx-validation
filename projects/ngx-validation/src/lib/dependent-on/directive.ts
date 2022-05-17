import { Directive, forwardRef, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, Validator, ValidatorFn } from '@angular/forms';

import { IControlValueDependency, dependentOn } from './validator';

const REQUIRED_IF_VALIDATOR: any = {
    provide: NG_VALIDATORS,
    useExisting: forwardRef(() => DependentOnValidatorDirective),
    multi: true
};

@Directive({
    selector: '[dependentOn][formControlName],[dependentOn][formControl],[dependentOn][ngModel]',
    providers: [REQUIRED_IF_VALIDATOR]
})
export class DependentOnValidatorDirective implements Validator, OnInit, OnChanges {

    @Input()
    public dependencies: IControlValueDependency[];

    private validator: ValidatorFn;
    private onChange: () => void;

    public ngOnInit() {
        this.validator = dependentOn(this.dependencies);
    }

    public ngOnChanges(changes: SimpleChanges) {
        for (const key in changes) {
            if (key === 'dependencies') {
                this.validator = dependentOn(changes[key].currentValue);
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
