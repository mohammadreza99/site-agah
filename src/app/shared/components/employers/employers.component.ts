import { Component, OnInit, Input } from '@angular/core';
import { Director, Counselor } from '@shared/models';

@Component({
  selector: 'ag-employers',
  templateUrl: './employers.component.html',
  styleUrls: ['./employers.component.scss'],
})
export class EmployersComponent implements OnInit {
  constructor() {}

  @Input() title: string;
  @Input() employers: Director[] | Counselor[] = [];
  @Input() buttonLabel: string;
  @Input() buttonRouterLink: string;

  ngOnInit(): void {}
}
