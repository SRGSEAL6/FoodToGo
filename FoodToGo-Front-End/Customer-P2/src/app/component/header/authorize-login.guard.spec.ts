import { TestBed } from '@angular/core/testing';

import { AuthorizeLoginGuard } from './authorize-login.guard';

describe('AuthorizeLoginGuard', () => {
  let guard: AuthorizeLoginGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(AuthorizeLoginGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
