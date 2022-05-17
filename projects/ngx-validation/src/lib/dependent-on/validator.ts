import { AbstractControl, FormGroup, ValidationErrors, ValidatorFn } from "@angular/forms";

export interface IControlValueDependency {

    childControl: AbstractControl;

    errorKey?: string;

    predicateFn: (formGroup: FormGroup) => boolean;
}

const errorKey = 'dependentOn';

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

                if (!dependency) {
                    return;
                }

                const isValid = dependency.predicateFn(control);
                const errors = dependency.childControl.errors;

                if (isValid && errors) {
                    delete errors[dependency.errorKey ?? errorKey];
                    dependency.childControl.setErrors({...errors});
                } else if (!isValid) {
                    dependency.childControl.setErrors({
                        ...dependency.childControl.errors,
                        [dependency.errorKey ?? errorKey]: true
                    })
                }
            });

        return null;
    };
};
