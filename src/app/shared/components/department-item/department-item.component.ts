import { Component, OnInit, Input } from '@angular/core';

import { LanguageChecker } from '@shared/components/language-checker/language-checker.component';
import { Department } from '@shared/models/department.model';

@Component({
  selector: 'ag-department-item',
  templateUrl: './department-item.component.html',
  styleUrls: ['./department-item.component.scss'],
})
export class DepartmentItemComponent extends LanguageChecker implements OnInit {
  @Input() department: Department;

  ngOnInit(): void {}
}
