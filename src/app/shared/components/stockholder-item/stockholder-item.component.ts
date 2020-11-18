import { Component, OnInit, Input } from '@angular/core';
import { Stockholder } from '@shared/models';

@Component({
  selector: 'ag-stockholder-item',
  templateUrl: './stockholder-item.component.html',
  styleUrls: ['./stockholder-item.component.scss'],
})
export class StockholderItemComponent implements OnInit {
  constructor() {}

  @Input() stockholder: Stockholder;

  ngOnInit(): void {}
}
