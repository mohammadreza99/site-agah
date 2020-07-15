import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'ag-news-item-shadowed',
  templateUrl: './news-item-shadowed.component.html',
  styleUrls: ['./news-item-shadowed.component.scss'],
})
export class NewsItemShadowedComponent implements OnInit {
  constructor() {}

  @Input() news: any;

  ngOnInit(): void {}
}
