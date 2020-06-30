import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'ag-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {
  @Input() popperText: string;
  @Input() popperPlacement: string = 'bottom-start';
  @Input() popperList: { text: string; path: string }[];

  ngOnInit(): void {}
}
