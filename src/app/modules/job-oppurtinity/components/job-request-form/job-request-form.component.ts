import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

import { LanguageChecker } from '@shared/components/language-checker/language-checker.component';
import { JobItem } from '@app/shared/models/job.model';
import { JobService } from '@app/core/http/job/job.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'ag-job-request-form',
  templateUrl: './job-request-form.component.html',
  styleUrls: ['./job-request-form.component.scss'],
})
export class JobRequestFormComponent extends LanguageChecker implements OnInit {
  constructor(private route: ActivatedRoute, private jobService: JobService) {
    super();
  }

  @Output() onSubmit = new EventEmitter();

  form = new FormGroup({
    job_id: new FormControl(null),
    first_name: new FormControl(null, [Validators.required]),
    last_name: new FormControl(null, [Validators.required]),
    birthday: new FormControl(null, [Validators.required]),
    gender: new FormControl(null, [Validators.required]),
    email: new FormControl(null, [Validators.required, Validators.email]),
    phone: new FormControl(null, [Validators.required]),
    address: new FormControl(null, [Validators.required]),
    resume: new FormControl(null, [Validators.required]),
  });

  job$: Observable<JobItem>;
  jobTitle: string;

  ngOnInit(): void {
    const jobId = this.route.snapshot.params['jobId'];
    this.job$ = this.jobService.getById(jobId);
    this.form.get('job_id').setValue(jobId);
  }

  _onSubmit() {
    this.onSubmit.emit(this.form.value);
  }
}
