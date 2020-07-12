import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { VisionService } from '@core/http/vision/vision.service';
import { Vision } from '@shared/models/vision.model';

@Component({
  selector: 'ag-job-request',
  templateUrl: './job-request.page.html',
  styleUrls: ['./job-request.page.scss'],
})
export class JobRequestPage implements OnInit {
  constructor(private visionService: VisionService) {}

  vision$: Observable<Vision>;

  ngOnInit(): void {
    this.vision$ = this.visionService.getVisionById(1);
  }
}
