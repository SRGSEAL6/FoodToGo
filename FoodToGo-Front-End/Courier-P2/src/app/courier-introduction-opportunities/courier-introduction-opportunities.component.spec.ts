import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CourierIntroductionOpportunitiesComponent } from './courier-introduction-opportunities.component';

describe('CourierIntroductionOpportunitiesComponent', () => {
  let component: CourierIntroductionOpportunitiesComponent;
  let fixture: ComponentFixture<CourierIntroductionOpportunitiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CourierIntroductionOpportunitiesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CourierIntroductionOpportunitiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
