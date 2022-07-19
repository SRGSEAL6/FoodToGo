import { TestBed } from '@angular/core/testing';

import { CourierProfileService } from './courier-profile.service';

describe('CourierProfileService', () => {
  let service: CourierProfileService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CourierProfileService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
