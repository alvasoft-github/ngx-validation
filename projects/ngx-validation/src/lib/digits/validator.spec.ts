import { UntypedFormControl } from '@angular/forms';

import { digits } from './validator';

describe('Digits', () => {
    const error = { digits: true };

    it('"234" should be digits', () => {
        const control = new UntypedFormControl('234');
        expect(digits(control)).toBeNull();
    });

    it('234 should be digits', () => {
        const control = new UntypedFormControl(234);
        expect(digits(control)).toBeNull();
    });

    it('"abc" should not be digits', () => {
        const control = new UntypedFormControl('abc');
        expect(digits(control)).toEqual(error);
    });

    it('"123a" should not be digits', () => {
        const control = new UntypedFormControl('123a');
        expect(digits(control)).toEqual(error);
    });
});
