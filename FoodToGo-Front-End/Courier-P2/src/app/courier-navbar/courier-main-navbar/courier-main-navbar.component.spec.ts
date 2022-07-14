import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CourierMainNavbarComponent } from './courier-main-navbar.component';

describe('CourierMainNavbarComponent', () => {
  let component: CourierMainNavbarComponent;
  let fixture: ComponentFixture<CourierMainNavbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CourierMainNavbarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CourierMainNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
