import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'ag-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss'],
})
export class NewsComponent implements OnInit {
  constructor() {}

  @Input() title: string;
  @Input() news: any[];

  ngOnInit(): void {}
}
