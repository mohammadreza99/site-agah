import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'ag-employers',
  templateUrl: './employers.component.html',
  styleUrls: ['./employers.component.scss'],
})
export class EmployersComponent implements OnInit {
  constructor() {}
  
  @Input() employers: any[] = [];

  ngOnInit(): void {}
}
