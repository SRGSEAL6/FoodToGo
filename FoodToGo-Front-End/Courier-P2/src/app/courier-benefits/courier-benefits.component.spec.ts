import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CourierBenefitsComponent } from './courier-benefits.component';

describe('CourierBenefitsComponent', () => {
  let component: CourierBenefitsComponent;
  let fixture: ComponentFixture<CourierBenefitsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CourierBenefitsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CourierBenefitsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
