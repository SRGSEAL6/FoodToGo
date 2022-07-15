import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CourierProfileVehicleInfoComponent } from './courier-profile-vehicle-info.component';

describe('CourierProfileVehicleInfoComponent', () => {
  let component: CourierProfileVehicleInfoComponent;
  let fixture: ComponentFixture<CourierProfileVehicleInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CourierProfileVehicleInfoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CourierProfileVehicleInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
