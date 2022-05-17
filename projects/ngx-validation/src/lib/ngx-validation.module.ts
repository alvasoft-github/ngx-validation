import { NgModule } from '@angular/core';
import { ArrayLengthValidatorDirective } from './array-length/directive';
import { Base64ValidatorDirective } from './base64/directive';
import { CreditCardValidatorDirective } from './credit-card/directive';
import { DateISOValidatorDirective } from './date-iso/directive';
import { DateValidatorDirective } from './date/directive';
import { DependentOnValidatorDirective } from './dependent-on/directive';
import { DigitsValidatorDirective } from './digits/directive';
import { EmailValidatorDirective } from './email/directive';
import { EqualToValidatorDirective } from './equal-to/directive';
import { EqualValidatorDirective } from './equal/directive';
import { GreaterThanEqualValidatorDirective } from './greater-than-equal/directive';
import { GreaterThanValidatorDirective } from './greater-than/directive';
import { IncludedInValidatorDirective } from './included-in/directive';
import { JSONValidatorDirective } from './json/directive';
import { LessThanEqualValidatorDirective } from './less-than-equal/directive';
import { LessThanValidatorDirective } from './less-than/directive';
import { MaxDateValidatorDirective } from './max-date/directive';
import { MaxValidatorDirective } from './max/directive';
import { MinDateValidatorDirective } from './min-date/directive';
import { MinValidatorDirective } from './min/directive';
import { NotEqualToValidatorDirective } from './not-equal-to/directive';
import { NotEqualValidatorDirective } from './not-equal/directive';
import { NotIncludedInValidatorDirective } from './not-included-in/directive';
import { NotMatchingValidatorDirective } from './not-matching/directive';
import { NumberValidatorDirective } from './number/directive';
import { PropertyValidatorDirective } from './property/directive';
import { RangeLengthValidatorDirective } from './range-length/directive';
import { RangeValidatorDirective } from './range/directive';
import { RequiredIfValidatorDirective } from './required-if/directive';
import { UrlValidatorDirective } from './url/directive';
import { UUIDValidatorDirective } from './uuid/directive';

const EXPORTED_COMPONENTS = [
    ArrayLengthValidatorDirective,
    Base64ValidatorDirective,
    CreditCardValidatorDirective,
    DateValidatorDirective,
    DateISOValidatorDirective,
    DependentOnValidatorDirective,
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
    RequiredIfValidatorDirective,
    UrlValidatorDirective,
    UUIDValidatorDirective
];


@NgModule({
    declarations: EXPORTED_COMPONENTS,
    exports: EXPORTED_COMPONENTS
})
export class NgxValidationModule { }
