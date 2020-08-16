import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { VisionService } from '@core/http/vision/vision.service';
import { HistoryService } from '@core/http/history/history.service';
import { Vision } from '@shared/models/vision.model';
import { History } from '@shared/models/history.model';
import { DepartmentService } from '@core/http/department/department.service';
import { Department } from '@shared/models/department.model';

@Component({
  selector: 'ag-history',
  templateUrl: './history.page.html',
  styleUrls: ['./history.page.scss'],
})
export class HistoryPage implements OnInit {
  constructor(
    private visionService: VisionService,
    private historyService: HistoryService,
    private departmentService: DepartmentService
  ) {}

  vision$: Observable<Vision>;
  histories$: Observable<History[]>;
  departments$: Observable<Department[]>;

  ngOnInit(): void {
    this.vision$ = this.visionService.get();
    this.histories$ = this.historyService.get();
    this.departments$ = this.departmentService.get();
  }
}
