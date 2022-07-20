import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CourierFrequentQuestionsComponent } from './courier-frequent-questions.component';

describe('CourierFrequentQuestionsComponent', () => {
  let component: CourierFrequentQuestionsComponent;
  let fixture: ComponentFixture<CourierFrequentQuestionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CourierFrequentQuestionsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CourierFrequentQuestionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
