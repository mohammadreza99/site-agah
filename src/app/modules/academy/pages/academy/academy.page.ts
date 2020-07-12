import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { PostService } from '@core/http/post/post.service';
import { BlogPost } from '@shared/models/blog-post.model';

@Component({
  selector: 'app-academy-page',
  templateUrl: './academy.page.html',
  styleUrls: ['./academy.page.scss'],
})
export class AcademyPage implements OnInit {
  constructor(private blogService: PostService) {}

  courses = [];
  news = [];
  blogPosts$: Observable<BlogPost[]>;

  ngOnInit(): void {
    this.blogPosts$ = this.blogService.getPosts();
    for (let index = 0; index < 10; index++) {
      this.courses.push({
        title: 'Test Course',
        image: 'assets/images/company.png',
        description: 'Description Course',
        category: 'Business',
        icon: 'assets/images/outline.png',
      });
      this.news.push({ title: 'title', image: 'assets/images/company.png' });
    }
  }
}
