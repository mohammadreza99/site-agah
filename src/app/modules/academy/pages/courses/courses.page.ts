import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { PostService } from '@core/http/post/post.service';
import { Post } from '@shared/models/post.model';
import { News } from '@app/shared/models/news.model';
import { NewsService } from '@app/core/http/news/news.service';

@Component({
  selector: 'ag-courses-page',
  templateUrl: './courses.page.html',
  styleUrls: ['./courses.page.scss'],
})
export class CoursesPage implements OnInit {
  constructor(private newsService: NewsService) {}

  news$: Observable<News[]>;

  ngOnInit(): void {
    this.news$ = this.newsService.get();
  }

  onListItemClick(item) {}
}
