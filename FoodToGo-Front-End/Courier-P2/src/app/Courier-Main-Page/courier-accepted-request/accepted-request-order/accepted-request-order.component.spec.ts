import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcceptedRequestOrderComponent } from './accepted-request-order.component';

describe('AcceptedRequestOrderComponent', () => {
  let component: AcceptedRequestOrderComponent;
  let fixture: ComponentFixture<AcceptedRequestOrderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AcceptedRequestOrderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AcceptedRequestOrderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
