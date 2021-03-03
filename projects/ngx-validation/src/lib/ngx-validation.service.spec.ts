import { TestBed } from '@angular/core/testing';

import { NgxValidationService } from './ngx-validation.service';

describe('NgxValidationService', () => {
  let service: NgxValidationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgxValidationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
