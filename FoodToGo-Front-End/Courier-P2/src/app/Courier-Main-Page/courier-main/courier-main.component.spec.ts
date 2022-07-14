import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CourierMainComponent } from './courier-main.component';

describe('CourierMainComponent', () => {
  let component: CourierMainComponent;
  let fixture: ComponentFixture<CourierMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CourierMainComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CourierMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
