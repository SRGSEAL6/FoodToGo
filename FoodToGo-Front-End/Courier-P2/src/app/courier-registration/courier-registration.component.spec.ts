import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CourierRegistrationComponent } from './courier-registration.component';

describe('CourierRegistrationComponent', () => {
  let component: CourierRegistrationComponent;
  let fixture: ComponentFixture<CourierRegistrationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CourierRegistrationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CourierRegistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
