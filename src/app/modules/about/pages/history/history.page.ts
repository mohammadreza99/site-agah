import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { Vision, HistoryItem, Department } from '@shared/models';
import { AgahService } from '@core/http';

@Component({
  selector: 'ag-history',
  templateUrl: './history.page.html',
  styleUrls: ['./history.page.scss'],
})
export class HistoryPage implements OnInit {
  constructor(
    private agahService: AgahService,
  ) {}

  vision$: Observable<Vision>;
  histories$: Observable<HistoryItem[]>;
  departments$: Observable<Department[]>;

  ngOnInit(): void {
    this.vision$ = this.agahService.getVision();
    this.histories$ = this.agahService.getHistories();
    this.departments$ = this.agahService.getDepartments();
  }
}
