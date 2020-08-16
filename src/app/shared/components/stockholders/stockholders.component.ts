import { Component, OnInit, Input } from '@angular/core';

import { Stockholder } from '@shared/models/stockholder.model';

@Component({
  selector: 'ag-stockholders',
  templateUrl: './stockholders.component.html',
  styleUrls: ['./stockholders.component.scss'],
})
export class StockholdersComponent implements OnInit {
  @Input() title: string;
  @Input() stockholders: Stockholder[] = [];

  ngOnInit(): void {}
}
