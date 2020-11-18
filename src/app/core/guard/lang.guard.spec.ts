import { TestBed } from '@angular/core/testing';

import { LangGuard } from './lang.guard';

describe('LangGuard', () => {
  let guard: LangGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(LangGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
