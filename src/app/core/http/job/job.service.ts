import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { ApiService } from '@core/http/api.service';
import { JobRequest, JobItem, JobItemDetails } from '@shared/models';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class JobService {
  constructor(private apiService: ApiService) {}

  private readonly jobsEndPoint = 'jobs';
  private readonly jobRequestEndPoint = 'job-requests';

  get(): Observable<JobItem[]> {
    return this.apiService
      .get<JobItem[]>(this.jobsEndPoint)
      .pipe(map((res: any) => res.data));
  }

  getById(id: number) {
    return this.apiService.get<JobItem>(`${this.jobsEndPoint}/${id}`);
  }

  getDetails(jobId: string) {
    return this.apiService
      .get<JobItemDetails[]>(`${this.jobsEndPoint}/${jobId}/details`)
      .pipe(map((res: any) => res.data));
  }

  request(form: JobRequest): Observable<JobRequest> {
    return this.apiService.post<JobRequest>(this.jobRequestEndPoint, form);
  }
}
