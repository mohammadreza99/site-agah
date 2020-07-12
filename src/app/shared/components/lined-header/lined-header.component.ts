import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'ag-lined-header',
  templateUrl: './lined-header.component.html',
  styleUrls: ['./lined-header.component.scss'],
})
export class LinedHeaderComponent implements OnInit {
  constructor() {}

  @Input() text: string;

  ngOnInit(): void {}
}
