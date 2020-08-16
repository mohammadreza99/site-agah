import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';

import { EmployeeService } from '@core/http/employee/employee.service';
import { Employee } from '@shared/models/employee.model';
import { LanguageChecker } from '@shared/components/language-checker/language-checker.component';

@Component({
  selector: 'ag-employees-page',
  templateUrl: './employees.page.html',
  styleUrls: ['./employees.page.scss'],
})
export class EmployeesPage extends LanguageChecker implements OnInit {
  constructor(private employeeService: EmployeeService) {
    super();
  }

  employees$: Observable<Employee[]>;

  ngOnInit(): void {
    this.employees$ = this.employeeService.get();
  }
}
