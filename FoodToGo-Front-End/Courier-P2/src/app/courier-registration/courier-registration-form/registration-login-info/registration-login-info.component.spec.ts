import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrationLoginInfoComponent } from './registration-login-info.component';

describe('RegistrationLoginInfoComponent', () => {
  let component: RegistrationLoginInfoComponent;
  let fixture: ComponentFixture<RegistrationLoginInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegistrationLoginInfoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegistrationLoginInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
