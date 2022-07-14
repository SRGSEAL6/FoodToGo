import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcceptedRequestDropOffComponent } from './accepted-request-drop-off.component';

describe('AcceptedRequestDropOffComponent', () => {
  let component: AcceptedRequestDropOffComponent;
  let fixture: ComponentFixture<AcceptedRequestDropOffComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AcceptedRequestDropOffComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AcceptedRequestDropOffComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
