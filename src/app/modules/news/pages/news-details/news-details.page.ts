import { Component, OnInit } from '@angular/core';
import { NewsService } from '@app/core/http/news/news.service';
import { Observable } from 'rxjs';
import { News } from '@app/shared/models/news.model';
import { ActivatedRoute } from '@angular/router';
import { switchMap, flatMap } from 'rxjs/operators';

@Component({
  selector: 'ag-news-details',
  templateUrl: './news-details.page.html',
  styleUrls: ['./news-details.page.scss'],
})
export class NewsDetailsPage implements OnInit {
  constructor(
    private newsService: NewsService,
    private route: ActivatedRoute
  ) {}

  news$: Observable<News[]>;
  news: News;
  ngOnInit(): void {
    this.news$ = this.newsService.get();
    this.route.params
      .pipe(
        flatMap((params) => {
          return this.newsService.getById(params['newsId']);
        })
      )
      .subscribe((news) => {
        this.news = news;
      });
  }
}
