import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrationPersonalInfoComponent } from './registration-personal-info.component';

describe('RegistrationPersonalInfoComponent', () => {
  let component: RegistrationPersonalInfoComponent;
  let fixture: ComponentFixture<RegistrationPersonalInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegistrationPersonalInfoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegistrationPersonalInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
