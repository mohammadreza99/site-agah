import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'ag-breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styleUrls: ['./breadcrumb.component.scss'],
})
export class BreadcrumbComponent implements OnInit {
  constructor() {}
  @Input() breadcrumbs: string[];

  ngOnInit(): void {}
}
