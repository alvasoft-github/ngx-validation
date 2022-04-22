import { NgModule } from '@angular/core';
import { ArrayLengthValidatorDirective, Base64ValidatorDirective, CreditCardValidatorDirective, DateValidatorDirective, DateISOValidatorDirective, DigitsValidatorDirective, EqualValidatorDirective, EqualToValidatorDirective, GreaterThanValidatorDirective, GreaterThanEqualValidatorDirective, IncludedInValidatorDirective, JSONValidatorDirective, LessThanValidatorDirective, LessThanEqualValidatorDirective, MaxDateValidatorDirective, MinDateValidatorDirective, NotEqualValidatorDirective, NotEqualToValidatorDirective, NotIncludedInValidatorDirective, NotMatchingValidatorDirective, NumberValidatorDirective, PropertyValidatorDirective, RangeValidatorDirective, RangeLengthValidatorDirective, UrlValidatorDirective, UUIDValidatorDirective, MaxValidatorDirective, MinValidatorDirective, EmailValidatorDirective } from '../public-api';

const EXPORTED_COMPONENTS = [
    ArrayLengthValidatorDirective,
    Base64ValidatorDirective,
    CreditCardValidatorDirective,
    DateValidatorDirective,
    DateISOValidatorDirective,
    DigitsValidatorDirective,
    EmailValidatorDirective,
    EqualValidatorDirective,
    EqualToValidatorDirective,
    GreaterThanValidatorDirective,
    GreaterThanEqualValidatorDirective,
    IncludedInValidatorDirective,
    JSONValidatorDirective,
    LessThanValidatorDirective,
    LessThanEqualValidatorDirective,
    MaxValidatorDirective,
    MaxDateValidatorDirective,
    MinValidatorDirective,
    MinDateValidatorDirective,
    NotEqualValidatorDirective,
    NotEqualToValidatorDirective,
    NotIncludedInValidatorDirective,
    NotMatchingValidatorDirective,
    NumberValidatorDirective,
    PropertyValidatorDirective,
    RangeValidatorDirective,
    RangeLengthValidatorDirective,
    UrlValidatorDirective,
    UUIDValidatorDirective
];


@NgModule({
    declarations: EXPORTED_COMPONENTS,
    exports: EXPORTED_COMPONENTS
})
export class NgxValidationModule { }
