import { AbstractControl, FormGroup, ValidationErrors, ValidatorFn } from '@angular/forms';

export interface IControlValueDependency {

    childControl: AbstractControl;

    errorKey?: string;

    errorKeyParams?: object;

    predicateFn: (formGroup: FormGroup) => boolean;
}

const errorKey = 'dependentOn';

export const dependentOn = (value: IControlValueDependency[]): ValidatorFn => {
    return (control: AbstractControl): ValidationErrors => {
        if (!(control instanceof FormGroup)) {
            return null;
        }

        value.forEach(v => {
            const isValid = v.predicateFn(control);
            const errors = v.childControl?.errors;

            if (isValid && errors) {
                delete errors[v.errorKey ?? errorKey];
                const errorsCount = Object.keys(errors).length;
                v.childControl?.setErrors(errorsCount > 0 ? { ...errors } : null);
            } else if (!isValid) {
                v.childControl?.setErrors({
                    ...v.childControl?.errors,
                    [v.errorKey ?? errorKey]: v.errorKeyParams ?? true
                });
            }
        });

        return null;
    };
};
