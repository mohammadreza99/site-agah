import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { PostService } from '@app/core/http/post/post.service';
import { Post } from '@app/shared/models/post.model';

@Component({
  selector: 'ag-courses-page',
  templateUrl: './courses.page.html',
  styleUrls: ['./courses.page.scss'],
})
export class CoursesPage implements OnInit {
  constructor(private postService: PostService) {}

  posts$: Observable<Post[]>;

  ngOnInit(): void {
    this.posts$ = this.postService.getPosts();
  }

  onListItemClick(item) {}
}
