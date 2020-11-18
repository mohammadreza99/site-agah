import { Component, OnInit, Input } from '@angular/core';

import { Process } from '@shared/models';

@Component({
  selector: 'ag-project-process',
  templateUrl: './project-process.component.html',
  styleUrls: ['./project-process.component.scss'],
})
export class ProjectProcessComponent implements OnInit {
  constructor() {}

  @Input() title: string;
  @Input() processes: Process[];
  @Input() countEnd = new Date(2020, 9, 3, 13, 21, 0);

  ngOnInit(): void {}
}
