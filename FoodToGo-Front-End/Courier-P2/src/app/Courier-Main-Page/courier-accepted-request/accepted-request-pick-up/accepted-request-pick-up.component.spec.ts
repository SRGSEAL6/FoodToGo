import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcceptedRequestPickUpComponent } from './accepted-request-pick-up.component';

describe('AcceptedRequestPickUpComponent', () => {
  let component: AcceptedRequestPickUpComponent;
  let fixture: ComponentFixture<AcceptedRequestPickUpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AcceptedRequestPickUpComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AcceptedRequestPickUpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
