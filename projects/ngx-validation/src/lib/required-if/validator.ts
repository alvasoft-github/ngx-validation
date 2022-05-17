import { AbstractControl, ValidationErrors, ValidatorFn, Validators } from "@angular/forms";
import { isPresent } from "../util/lang";

export const requiredIf = (value: () => boolean): ValidatorFn => {
    return (control: AbstractControl): ValidationErrors => {
        if (isPresent(Validators.required(control))) {
            return null;
        }

        return !isPresent(control.value) && value?.() ? { requiredIf: true } : null;
    };
};
