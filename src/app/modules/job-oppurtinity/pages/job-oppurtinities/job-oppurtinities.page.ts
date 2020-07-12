import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { VisionService } from '@core/http/vision/vision.service';
import { Vision } from '@shared/models/vision.model';

@Component({
  selector: 'ag-job-oppurtinities-page',
  templateUrl: './job-oppurtinities.page.html',
  styleUrls: ['./job-oppurtinities.page.scss'],
})
export class JobOppurtinitiesPage implements OnInit {
  constructor(private visionService: VisionService) {}

  vision$: Observable<Vision>;
  ngOnInit(): void {
    this.vision$ = this.visionService.getVisionById(1);
  }
}
