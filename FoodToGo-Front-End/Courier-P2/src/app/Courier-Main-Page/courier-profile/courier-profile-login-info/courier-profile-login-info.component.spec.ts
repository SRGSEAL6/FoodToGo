import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CourierProfileLoginInfoComponent } from './courier-profile-login-info.component';

describe('CourierProfileLoginInfoComponent', () => {
  let component: CourierProfileLoginInfoComponent;
  let fixture: ComponentFixture<CourierProfileLoginInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CourierProfileLoginInfoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CourierProfileLoginInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
