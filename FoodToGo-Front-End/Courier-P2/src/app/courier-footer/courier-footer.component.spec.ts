import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CourierFooterComponent } from './courier-footer.component';

describe('CourierFooterComponent', () => {
  let component: CourierFooterComponent;
  let fixture: ComponentFixture<CourierFooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CourierFooterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CourierFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
