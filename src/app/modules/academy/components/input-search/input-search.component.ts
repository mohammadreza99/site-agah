import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'ag-input-search',
  templateUrl: './input-search.component.html',
  styleUrls: ['./input-search.component.scss'],
})
export class InputSearchComponent implements OnInit {
  constructor() {}

  @Output() searchIconClick = new EventEmitter();
  @Output() valueChange = new EventEmitter();

  value: string = null;

  ngOnInit(): void {}
}
