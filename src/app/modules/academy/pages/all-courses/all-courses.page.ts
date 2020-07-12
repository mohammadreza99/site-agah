import { Component, OnInit } from '@angular/core';
import { PostService } from '@app/core/http/post/post.service';
import { Observable } from 'rxjs';
import { BlogPost } from '@app/shared/models/blog-post.model';

@Component({
  selector: 'ag-all-courses',
  templateUrl: './all-courses.page.html',
  styleUrls: ['./all-courses.page.scss'],
})
export class AllCoursesPage implements OnInit {
  constructor(private blogService: PostService) {}
  course = {
    title: 'Test Course',
    image: 'assets/images/company.png',
    description: 'Description Course',
    category: 'Business',
    icon: 'assets/images/outline.png',
  };
  blogPosts$: Observable<BlogPost[]>;

  ngOnInit(): void {
    this.blogPosts$ = this.blogService.getPosts();
  }
}
