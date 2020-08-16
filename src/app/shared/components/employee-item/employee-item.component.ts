import { Component, OnInit, Input } from '@angular/core';
import { Employee } from '@shared/models/employee.model';

@Component({
  selector: 'ag-employee-item',
  templateUrl: './employee-item.component.html',
  styleUrls: ['./employee-item.component.scss'],
})
export class EmployeeItemComponent implements OnInit {
  constructor() {}

  @Input() employee: Employee;

  @Input() title: string;
  @Input() subtitle: string;
  @Input() image: string;

  get employeeFullName() {
    return `${this.employee.first_name} ${this.employee.last_name}`;
  }

  ngOnInit(): void {
  }
}
