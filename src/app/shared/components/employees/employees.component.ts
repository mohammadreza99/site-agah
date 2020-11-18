import { Component, OnInit, Input } from '@angular/core';
import { Employee } from '@shared/models';

@Component({
  selector: 'ag-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.scss'],
})
export class EmployeesComponent implements OnInit {
  constructor() {}

  @Input() title: string;
  @Input() employees: Employee[] = [];

  ngOnInit(): void {}
}
