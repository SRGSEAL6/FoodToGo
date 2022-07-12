import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CourierAcceptedRequestComponent } from './courier-accepted-request.component';

describe('CourierAcceptedRequestComponent', () => {
  let component: CourierAcceptedRequestComponent;
  let fixture: ComponentFixture<CourierAcceptedRequestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CourierAcceptedRequestComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CourierAcceptedRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
