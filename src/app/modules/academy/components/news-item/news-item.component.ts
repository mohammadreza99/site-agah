import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'ag-news-item',
  templateUrl: './news-item.component.html',
  styleUrls: ['./news-item.component.scss'],
})
export class NewsItemComponent implements OnInit {
  constructor() {}

  @Input() news: any;

  ngOnInit(): void {}
}
