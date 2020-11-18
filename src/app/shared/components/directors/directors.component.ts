import { Component, OnInit, Input } from '@angular/core';
import { Director } from '@shared/models';

@Component({
  selector: 'ag-directors',
  templateUrl: './directors.component.html',
  styleUrls: ['./directors.component.scss'],
})
export class DirectorsComponent implements OnInit {
  constructor() {}

  @Input() title: string;
  @Input() directors: Director[] = [];
  @Input() buttonLabel: string;
  @Input() buttonRouterLink: string;

  ngOnInit(): void {}
}
