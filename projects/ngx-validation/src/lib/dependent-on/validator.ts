import { AbstractControl, UntypedFormGroup, ValidationErrors, ValidatorFn } from '@angular/forms';

export const DEPENDENT_ON_TRANSLATED_PARAMS_KEY = '__DEPENDENT_ON_TRANSLATED_PARAMS';

export interface ITranslatedErrorParams {

    translationKey: string;

    translationParams?: object;
}

export interface IDependentOnValidationOptions {

    childControl: AbstractControl;

    errorKey?: string;

    errorKeyParamsFn?: (formGroup: UntypedFormGroup) => object;

    translatedErrorKeyParamsFn?: (FormGroup: UntypedFormGroup) => { [id: string]: ITranslatedErrorParams };

    predicateFn: (formGroup: UntypedFormGroup) => boolean;
}

const errorKey = 'dependentOn';

export const dependentOn = (value: IDependentOnValidationOptions[]): ValidatorFn => {
    return (control: AbstractControl): ValidationErrors => {
        if (!(control instanceof UntypedFormGroup)) {
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
                const errorValue = (v.errorKeyParamsFn || v.translatedErrorKeyParamsFn)
                    ? {
                        ...v.errorKeyParamsFn?.(control),
                        [DEPENDENT_ON_TRANSLATED_PARAMS_KEY]: v.translatedErrorKeyParamsFn(control)
                    }
                    : null;

                v.childControl?.setErrors({
                    ...v.childControl?.errors,
                    [v.errorKey ?? errorKey]: errorValue ?? true
                });
            }
        });

        return null;
    };
};
