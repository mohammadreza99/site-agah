import { Component, OnInit, Input } from '@angular/core';
import { History } from '@shared/models/history.model';

@Component({
  selector: 'ag-history-item',
  templateUrl: './history-item.component.html',
  styleUrls: ['./history-item.component.scss'],
})
export class HistoryItemComponent implements OnInit {
  constructor() {}

  @Input() history: History;

  ngOnInit(): void {}
}
