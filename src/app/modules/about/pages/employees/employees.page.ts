import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';


import { LanguageChecker } from '@shared/components/language-checker/language-checker.component';
import { Employee } from '@shared/models';
import { AgahService } from '@core/http';

@Component({
  selector: 'ag-employees-page',
  templateUrl: './employees.page.html',
  styleUrls: ['./employees.page.scss'],
})
export class EmployeesPage extends LanguageChecker implements OnInit {
  constructor(private agahService: AgahService) {
    super();
  }

  employees$: Observable<Employee[]>;

  ngOnInit(): void {
    this.employees$ = this.agahService.getEmployees();
  }
}
