import { Component, OnInit, Input } from '@angular/core';
import { Director, Stockholder } from '@shared/models';

@Component({
  selector: 'ag-employer-item',
  templateUrl: './employer-item.component.html',
  styleUrls: ['./employer-item.component.scss'],
})
export class EmployerItemComponent implements OnInit {
  constructor() {}

  @Input() employer: Director | Stockholder;

  // get employerFullName() {
  // return `${this.employer.firstName} ${this.employer.lastName}`;
  // }

  ngOnInit(): void {}
}
