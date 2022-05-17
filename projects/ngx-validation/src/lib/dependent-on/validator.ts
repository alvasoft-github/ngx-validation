import { AbstractControl, FormGroup, ValidationErrors, ValidatorFn, Validators } from "@angular/forms";

export interface IControlValueDependency {

    childControl: AbstractControl;

    errorKey?: string;

    predicateFn: (formGroup: FormGroup) => boolean;
}

export const dependentOn = (value: IControlValueDependency[]): ValidatorFn => {
    return (control: AbstractControl): ValidationErrors => {
        if (!(control instanceof FormGroup)) {
            return null;
        }

        const findDependency = (c: AbstractControl) => value.find(v => v.childControl === c);

        Object.entries(control.controls)
            .forEach(entry => {
                const ctrl = entry[1];
                const dependency = findDependency(ctrl);
                const isValid = dependency?.predicateFn(control);

                isValid && dependency.childControl.setErrors({
                    ...dependency.childControl.errors,
                    [dependency.errorKey ?? 'dependentOn']: true
                })
            });

        return null;
    };
};
