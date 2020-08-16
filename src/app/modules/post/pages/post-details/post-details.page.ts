import { Component, OnInit } from '@angular/core';
import { PostService } from '@core/http/post/post.service';
import { Observable } from 'rxjs';
import { Post } from '@shared/models/post.model';
import { flatMap } from 'rxjs/operators';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'ag-post-details',
  templateUrl: './post-details.page.html',
  styleUrls: ['./post-details.page.scss'],
})
export class PostDetailsPage implements OnInit {
  constructor(
    private postService: PostService,
    private route: ActivatedRoute
  ) {}

  posts$: Observable<Post[]>;
  post: Post;
  ngOnInit(): void {
    this.posts$ = this.postService.get();
    this.route.params
      .pipe(
        flatMap((params) => {
          return this.postService.getById(params['postId']);
        })
      )
      .subscribe((post) => {
        this.post = post;
      });
  }
}
