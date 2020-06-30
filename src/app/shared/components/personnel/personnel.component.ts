import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'ag-personnel',
  templateUrl: './personnel.component.html',
  styleUrls: ['./personnel.component.scss'],
})
export class PersonnelComponent implements OnInit {
  constructor() {}

  @Input() title: string;
  @Input() personnel: any[];
  @Input() showDownloadButton: any[];
  @Output() downloadClick = new EventEmitter();

  ngOnInit(): void {}
}
