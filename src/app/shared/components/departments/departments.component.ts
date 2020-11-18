import { Component, OnInit, Input } from '@angular/core';
import { Department } from '@shared/models';

@Component({
  selector: 'ag-departments',
  templateUrl: './departments.component.html',
  styleUrls: ['./departments.component.scss'],
})
export class DepartmentsComponent implements OnInit {
  constructor() {}

  @Input() departments: Department[];
  ngOnInit(): void {}
}
