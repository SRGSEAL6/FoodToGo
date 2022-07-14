import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CourierReceivedRequestComponent } from './courier-received-request.component';

describe('CourierReceivedRequestComponent', () => {
  let component: CourierReceivedRequestComponent;
  let fixture: ComponentFixture<CourierReceivedRequestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CourierReceivedRequestComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CourierReceivedRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
