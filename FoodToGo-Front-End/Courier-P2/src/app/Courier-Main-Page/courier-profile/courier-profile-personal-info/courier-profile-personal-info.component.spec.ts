import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CourierProfilePersonalInfoComponent } from './courier-profile-personal-info.component';

describe('CourierProfilePersonalInfoComponent', () => {
  let component: CourierProfilePersonalInfoComponent;
  let fixture: ComponentFixture<CourierProfilePersonalInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CourierProfilePersonalInfoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CourierProfilePersonalInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
