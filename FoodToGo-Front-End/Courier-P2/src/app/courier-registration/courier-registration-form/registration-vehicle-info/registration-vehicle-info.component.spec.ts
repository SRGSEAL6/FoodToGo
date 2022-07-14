import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrationVehicleInfoComponent } from './registration-vehicle-info.component';

describe('RegistrationVehicleInfoComponent', () => {
  let component: RegistrationVehicleInfoComponent;
  let fixture: ComponentFixture<RegistrationVehicleInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegistrationVehicleInfoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegistrationVehicleInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
