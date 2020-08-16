import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { VisionService } from '@core/http/vision/vision.service';
import { Vision } from '@shared/models/vision.model';
import { JobService } from '@core/http/job/job.service';
import { JobRequest } from '@app/shared/models/job.model';

@Component({
  selector: 'ag-job-request',
  templateUrl: './job-request.page.html',
  styleUrls: ['./job-request.page.scss'],
})
export class JobRequestPage implements OnInit {
  constructor(
    private visionService: VisionService,
    private jobRequestServie: JobService
  ) {}

  vision$: Observable<Vision>;

  ngOnInit(): void {
    this.vision$ = this.visionService.get();
  }

  onSubmitForm(form: JobRequest) {
    this.jobRequestServie.request(form).subscribe();
  }
}
