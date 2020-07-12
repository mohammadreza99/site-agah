import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { Director } from '@shared/models/director.mode';
import { Stockholder } from '@shared/models/stockholder.model';

@Component({
  selector: 'ag-employers',
  templateUrl: './employers.component.html',
  styleUrls: ['./employers.component.scss'],
})
export class EmployersComponent implements OnInit {
  constructor() {}

  @Input() title: string;
  @Input() employers: Director[] | Stockholder[] = [];
  @Input() showDownloadButton: boolean;
  @Output() downloadClick = new EventEmitter();

  ngOnInit(): void {}
}
