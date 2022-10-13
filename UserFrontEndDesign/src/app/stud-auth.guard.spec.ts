import { TestBed } from '@angular/core/testing';

import { StudAuthGuard } from './stud-auth.guard';

describe('StudAuthGuard', () => {
  let guard: StudAuthGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(StudAuthGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
