import { TestBed } from '@angular/core/testing';

import { DropOffService } from './drop-off.service';

describe('DropOffService', () => {
  let service: DropOffService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DropOffService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
