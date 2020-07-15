import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'ag-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.scss'],
})
export class ContainerComponent implements OnInit {
  constructor() {}

  @Input() title: string;
  @Input() titleMargin = 80;

  ngOnInit(): void {}
}
