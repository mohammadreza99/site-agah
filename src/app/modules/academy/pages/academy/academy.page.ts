import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { Post, News, Course } from '@shared/models';
import { MultimediaService } from '@core/http';
import { LanguageChecker } from '@app/shared/components/language-checker/language-checker.component';
import { AcademyService } from '@app/core/http/academy/academy.service';

@Component({
  selector: 'app-academy-page',
  templateUrl: './academy.page.html',
  styleUrls: ['./academy.page.scss'],
})
export class AcademyPage extends LanguageChecker implements OnInit {
  constructor(
    private multimediaService: MultimediaService,
    private academyService: AcademyService
  ) {
    super();
  }

  bestCourses$: Observable<Course[]>;
  featuredPosts$: Observable<Post[]>;
  news$: Observable<News[]>;

  ngOnInit(): void {
    this.bestCourses$ = this.academyService.getBestCourses();
    this.featuredPosts$ = this.multimediaService.getFeaturedPosts();
    this.news$ = this.multimediaService.getNews();
  }
}
