import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { Post } from '@shared/models';
import { MultimediaService } from '@core/http';

@Component({
  selector: 'ag-posts-page',
  templateUrl: './posts.page.html',
  styleUrls: ['./posts.page.scss'],
})
export class PostsPage implements OnInit {
  constructor(private multimediaService: MultimediaService) {}

  posts$: Observable<Post[]>;

  ngOnInit(): void {
    this.posts$ = this.multimediaService.getPosts();
  }

  onListItemClick(item) {}
}
