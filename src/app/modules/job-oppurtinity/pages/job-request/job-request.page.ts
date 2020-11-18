import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { JobService } from '@core/http/job/job.service';
import { JobRequest, Vision } from '@shared/models';
import { AgahService } from '@core/http';

@Component({
  selector: 'ag-job-request',
  templateUrl: './job-request.page.html',
  styleUrls: ['./job-request.page.scss'],
})
export class JobRequestPage implements OnInit {
  constructor(
    private agahService: AgahService,
    private jobRequestServie: JobService
  ) {}

  vision$: Observable<Vision>;

  ngOnInit(): void {
    this.vision$ = this.agahService.getVision();
  }

  onSubmitForm(form: JobRequest) {
    this.jobRequestServie.request(form).subscribe();
  }
}
