import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { Director } from '@shared/models/director.model';
import { Counselor } from '@app/shared/models/counselor.model';

@Component({
  selector: 'ag-employers',
  templateUrl: './employers.component.html',
  styleUrls: ['./employers.component.scss'],
})
export class EmployersComponent implements OnInit {
  constructor() {}

  @Input() title: string;
  @Input() employers: Director[] | Counselor[] = [];
  @Input() buttonLabel: string;
  @Input() buttonRouterLink: string;

  ngOnInit(): void {}
}
