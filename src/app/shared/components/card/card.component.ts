import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'ag-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit {
  constructor() {}
  @Input() image: string;
  @Input() title: string;
  @Input() description: string;
  @Input() commentCounts: number;
  @Input() date: any;
  @Input() type: 'news' | 'blog' = 'blog';

  get isNews() {
    return this.type === 'news';
  }

  get isBlog() {
    return this.type === 'blog';
  }

  ngOnInit(): void {}
}
