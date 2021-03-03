import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxValidationComponent } from './ngx-validation.component';

describe('NgxValidationComponent', () => {
  let component: NgxValidationComponent;
  let fixture: ComponentFixture<NgxValidationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgxValidationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxValidationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
