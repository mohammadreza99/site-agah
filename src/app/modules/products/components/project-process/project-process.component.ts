import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'ag-project-process',
  templateUrl: './project-process.component.html',
  styleUrls: ['./project-process.component.scss'],
})
export class ProjectProcessComponent implements OnInit {
  constructor() {}

  @Input() processes: any[];
  @Input() countEnd = new Date(2020, 5, 29, 13, 21, 0);
  
  ngOnInit(): void {}
}
