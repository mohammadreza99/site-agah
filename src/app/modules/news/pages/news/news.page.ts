import { Component, OnInit } from '@angular/core';
import { News } from '@app/shared/models/news.model';
import { Observable } from 'rxjs';
import { NewsService } from '@app/core/http/news/news.service';

@Component({
  selector: 'ag-news-page',
  templateUrl: './news.page.html',
  styleUrls: ['./news.page.scss'],
})
export class NewsPage implements OnInit {
  constructor(private newsService: NewsService) {}

  news$: Observable<News[]>;

  ngOnInit(): void {
    this.news$ = this.newsService.get();
  }

  onListItemClick(item) {}
}
