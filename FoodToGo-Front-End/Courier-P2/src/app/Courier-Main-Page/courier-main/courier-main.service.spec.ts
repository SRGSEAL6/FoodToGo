import { TestBed } from '@angular/core/testing';

import { CourierMainService } from './courier-main.service';

describe('CourierMainService', () => {
  let service: CourierMainService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CourierMainService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
