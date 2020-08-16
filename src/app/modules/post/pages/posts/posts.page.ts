import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { PostService } from '@core/http/post/post.service';
import { Post } from '@shared/models/post.model';

@Component({
  selector: 'ag-posts-page',
  templateUrl: './posts.page.html',
  styleUrls: ['./posts.page.scss'],
})
export class PostsPage implements OnInit {
  constructor(private postService: PostService) {}

  posts$: Observable<Post[]>;

  ngOnInit(): void {
    this.posts$ = this.postService.get();
  }

  onListItemClick(item) {}
}
