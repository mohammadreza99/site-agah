import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { Stockholder } from '@shared/models/stockholder.model';
import { StockholderService } from '@core/http/stockholder/stockholder.service';

@Component({
  selector: 'ag-stockholders-page',
  templateUrl: './stockholders.page.html',
  styleUrls: ['./stockholders.page.scss'],
})
export class StockholdersPage implements OnInit {
  constructor(private stockholderService: StockholderService) {}

  stockholders$: Observable<Stockholder[]>;

  ngOnInit(): void {
    this.stockholders$ = this.stockholderService.get();
  }
}
