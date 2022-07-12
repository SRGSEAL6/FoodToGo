import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CourierRegistrationNavbarComponent } from './courier-registration-navbar.component';

describe('CourierRegistrationNavbarComponent', () => {
  let component: CourierRegistrationNavbarComponent;
  let fixture: ComponentFixture<CourierRegistrationNavbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CourierRegistrationNavbarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CourierRegistrationNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
