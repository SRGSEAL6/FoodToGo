import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CourierRegistrationFormComponent } from './courier-registration-form.component';

describe('CourierRegistrationFormComponent', () => {
  let component: CourierRegistrationFormComponent;
  let fixture: ComponentFixture<CourierRegistrationFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CourierRegistrationFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CourierRegistrationFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
