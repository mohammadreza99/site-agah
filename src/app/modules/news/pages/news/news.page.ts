import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { News } from '@shared/models';
import { MultimediaService } from '@core/http';

@Component({
  selector: 'ag-news-page',
  templateUrl: './news.page.html',
  styleUrls: ['./news.page.scss'],
})
export class NewsPage implements OnInit {
  constructor(private multimediaService: MultimediaService) {}

  news$: Observable<News[]>;

  ngOnInit(): void {
    this.news$ = this.multimediaService.getNews();
  }

  onListItemClick(item) {}
}
