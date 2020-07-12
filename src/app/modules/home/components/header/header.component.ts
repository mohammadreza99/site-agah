import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'ag-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  constructor() {}

  @Input() title: string;

  ngOnInit(): void {}
}
