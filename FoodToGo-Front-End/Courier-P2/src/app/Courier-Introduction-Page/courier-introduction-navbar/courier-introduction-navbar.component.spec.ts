import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CourierIntroductionNavbarComponent } from './courier-introduction-navbar.component';

describe('CourierIntroductionNavbarComponent', () => {
  let component: CourierIntroductionNavbarComponent;
  let fixture: ComponentFixture<CourierIntroductionNavbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CourierIntroductionNavbarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CourierIntroductionNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
