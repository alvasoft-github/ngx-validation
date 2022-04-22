import { Directive, forwardRef, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, Validator, ValidatorFn } from '@angular/forms';

import { uuid } from './validator';

const UUID_VALIDATOR: any = {
    provide: NG_VALIDATORS,
    useExisting: forwardRef(() => UUIDValidatorDirective),
    multi: true
};

@Directive({
    selector: '[uuid][formControlName],[uuid][formControl],[uuid][ngModel]',
    providers: [UUID_VALIDATOR]
})
export class UUIDValidatorDirective implements Validator, OnInit, OnChanges {

    @Input()
    public uuid: any;

    private validator: ValidatorFn;
    private onChange: () => void;

    public ngOnInit() {
        this.validator = uuid(this.uuid);
    }

    public ngOnChanges(changes: SimpleChanges) {
        for (const key in changes) {
            if (key === 'uuid') {
                this.validator = uuid(changes[key].currentValue);
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
