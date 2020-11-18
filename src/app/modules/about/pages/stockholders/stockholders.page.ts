import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { Stockholder } from '@shared/models';
import { AgahService } from '@core/http';

@Component({
  selector: 'ag-stockholders-page',
  templateUrl: './stockholders.page.html',
  styleUrls: ['./stockholders.page.scss'],
})
export class StockholdersPage implements OnInit {
  constructor(private agahService: AgahService) {}

  stockholders$: Observable<Stockholder[]>;

  ngOnInit(): void {
    this.stockholders$ = this.agahService.getStockholders();
  }
}
