import { TestBed } from '@angular/core/testing';

import { AgahService } from './agah.service';

describe('AgahService', () => {
  let service: AgahService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AgahService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
