import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'ag-history-item',
  templateUrl: './history-item.component.html',
  styleUrls: ['./history-item.component.scss'],
})
export class HistoryItemComponent implements OnInit {
  constructor() {}

  @Input() image: string;
  @Input() description: string;
  
  ngOnInit(): void {}
}
