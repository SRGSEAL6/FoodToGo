import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CourierIntroductionComponent } from './courier-introduction.component';

describe('CourierIntroductionComponent', () => {
  let component: CourierIntroductionComponent;
  let fixture: ComponentFixture<CourierIntroductionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CourierIntroductionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CourierIntroductionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
