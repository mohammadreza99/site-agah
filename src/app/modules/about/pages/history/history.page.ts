import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { VisionService } from '@app/core/http/vision/vision.service';
import { HistoryService } from '@app/core/http/history/history.service';
import { Vision } from '@app/shared/models/vision.model';
import { History } from '@app/shared/models/history.model';

@Component({
  selector: 'ag-history',
  templateUrl: './history.page.html',
  styleUrls: ['./history.page.scss'],
})
export class HistoryPage implements OnInit {
  constructor(
    private visionService: VisionService,
    private historyService: HistoryService
  ) {}

  vision$: Observable<Vision>;
  histories$: Observable<History[]>;
  ngOnInit(): void {
    this.vision$ = this.visionService.getVisionById(1);
    this.histories$ = this.historyService.getHistorys();
  }
}
