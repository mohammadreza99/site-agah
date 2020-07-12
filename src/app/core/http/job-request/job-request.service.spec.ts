import { TestBed } from '@angular/core/testing';

import { JobRequestService } from './job-request.service';

describe('JobRequestService', () => {
  let service: JobRequestService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(JobRequestService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
