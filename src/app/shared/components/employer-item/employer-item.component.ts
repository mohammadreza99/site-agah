import { Component, OnInit, Input } from '@angular/core';
import { Stockholder } from '@shared/models/stockholder.model';
import { Director } from '@shared/models/director.mode';

@Component({
  selector: 'ag-employer-item',
  templateUrl: './employer-item.component.html',
  styleUrls: ['./employer-item.component.scss'],
})
export class EmployerItemComponent implements OnInit {
  constructor() {}

  @Input() employer: Director | Stockholder;

  get employerFullName() {
    return `${this.employer.firstName} ${this.employer.lastName}`;
  }

  ngOnInit(): void {}
}
