import { UntypedFormControl } from '@angular/forms';

import { lte } from './validator';

describe('LTE', () => {
    it('3 should be lte 5', () => {
        const control = new UntypedFormControl(3);
        expect(lte(5)(control)).toBeNull();
    });

    it('5 should be lte 5', () => {
        const control = new UntypedFormControl(5);
        expect(lte(5)(control)).toBeNull();
    });

    it('5 should not be lte 3', () => {
        const control = new UntypedFormControl(5);
        expect(lte(3)(control)).toEqual({ lte: { value: 3 } });
    });
});
