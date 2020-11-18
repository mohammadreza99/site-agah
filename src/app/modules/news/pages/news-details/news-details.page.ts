import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { flatMap } from 'rxjs/operators';

import { News } from '@shared/models';
import { MultimediaService } from '@core/http';
import { LanguageChecker } from '@app/shared/components/language-checker/language-checker.component';

@Component({
  selector: 'ag-news-details',
  templateUrl: './news-details.page.html',
  styleUrls: ['./news-details.page.scss'],
})
export class NewsDetailsPage extends LanguageChecker implements OnInit {
  constructor(
    private multimediaService: MultimediaService,
    private route: ActivatedRoute
  ) {
    super();
  }

  news$: Observable<News[]>;
  news: News;

  ngOnInit(): void {
    this.news$ = this.multimediaService.getNews();
    this.route.params
      .pipe(
        flatMap((params) => {
          return this.multimediaService.getNewsById(params['newsId']);
        })
      )
      .subscribe((news) => {
        this.news = news;
      });
  }
}
