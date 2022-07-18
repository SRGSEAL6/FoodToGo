import { TestBed } from '@angular/core/testing';

import { CourierIntroductionService } from './courier-introduction.service';

describe('CourierIntroductionService', () => {
  let service: CourierIntroductionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CourierIntroductionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
