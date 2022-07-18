import { TestBed } from '@angular/core/testing';

import { AuthorizeLoginService } from './authorize-login.service';

describe('AuthorizeLoginService', () => {
  let service: AuthorizeLoginService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuthorizeLoginService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
