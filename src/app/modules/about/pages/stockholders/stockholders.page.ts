import { Component, OnInit } from '@angular/core';
import { StockholderService } from '@app/core/http/stockholder/stockholder.service';
import { Observable } from 'rxjs';
import { Stockholder } from '@app/shared/models/stockholder.model';

@Component({
  selector: 'ag-stockholders-page',
  templateUrl: './stockholders.page.html',
  styleUrls: ['./stockholders.page.scss'],
})
export class StockholdersPage implements OnInit {
  constructor(private stockholderService: StockholderService) {}

  stockholders$: Observable<Stockholder[]>;

  ngOnInit(): void {
    this.stockholders$ = this.stockholderService.getStockholders();
  }
}
