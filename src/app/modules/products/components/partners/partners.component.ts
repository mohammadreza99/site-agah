import { Component, OnInit, Input } from '@angular/core';

import { Partner } from '@shared/models';

@Component({
  selector: 'ag-partners',
  templateUrl: './partners.component.html',
  styleUrls: ['./partners.component.scss'],
})
export class PartnersComponent implements OnInit {
  constructor() {}

  @Input() title: string;
  @Input() partners: Partner[] = [];

  ngOnInit(): void {}
}
