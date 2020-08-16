import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { PostService } from '@core/http/post/post.service';
import { Post } from '@shared/models/post.model';
import { News } from '@app/shared/models/news.model';
import { NewsService } from '@app/core/http/news/news.service';

@Component({
  selector: 'app-academy-page',
  templateUrl: './academy.page.html',
  styleUrls: ['./academy.page.scss'],
})
export class AcademyPage implements OnInit {
  constructor(
    private postService: PostService,
    private newsService: NewsService
  ) {}

  courses = [];
  posts$: Observable<Post[]>;
  news$: Observable<News[]>;

  ngOnInit(): void {
    this.posts$ = this.postService.get();
    this.news$ = this.newsService.get();

    for (let index = 0; index < 10; index++) {
      this.courses.push({
        title: 'Test Course',
        image: 'assets/images/company.png',
        description: 'Description Course',
        category: 'Business',
        icon: 'assets/images/outline.png',
      });
    }
  }
}
