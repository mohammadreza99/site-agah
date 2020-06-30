import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'ag-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss'],
})
export class CardsComponent implements OnInit {
  constructor() {}

  @Input() title: string;
  @Input() list: any[] = [];
  type: string;
  ngOnInit(): void {
    // TODO:
    // if (this.list[0] instanceof 'blogClass') this.type = 'blog';
    // else if (this.list[0] instanceof 'newsClass') this.type = 'news';
  }
}
