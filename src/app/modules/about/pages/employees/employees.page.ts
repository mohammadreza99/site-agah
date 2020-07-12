import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';

import { EmployeeService } from '@core/http/employee/employee.service';
import { Employee } from '@shared/models/employee.model';

@Component({
  selector: 'ag-employees-page',
  templateUrl: './employees.page.html',
  styleUrls: ['./employees.page.scss'],
})
export class EmployeesPage implements OnInit {
  constructor(private employeeService: EmployeeService) {}

  employees$: Observable<Employee[]>;

  ngOnInit(): void {
    // this.employees$ = this.employeeService.getEmployees();
    this.employees$ = of([
      {
        first_name: 'string',
        last_name: 'string',
        image: 'assets/images/company.png',
        position_id: 1,
      },
      {
        first_name: 'string',
        last_name: 'string',
        image: 'assets/images/company.png',
        position_id: 1,
      },
      {
        first_name: 'string',
        last_name: 'string',
        image: 'assets/images/company.png',
        position_id: 1,
      },
      {
        first_name: 'string',
        last_name: 'string',
        image: 'assets/images/company.png',
        position_id: 1,
      },
      {
        first_name: 'string',
        last_name: 'string',
        image: 'assets/images/company.png',
        position_id: 1,
      },
      {
        first_name: 'string',
        last_name: 'string',
        image: 'assets/images/company.png',
        position_id: 1,
      },
    ] as Employee[]);
  }
}
