import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ag-news-page',
  templateUrl: './news.page.html',
  styleUrls: ['./news.page.scss'],
})
export class NewsPage implements OnInit {
  // constructor(private postService: PostService) {}

  // posts$: Observable<Post[]>;

  ngOnInit(): void {
    // this.posts$ = this.postService.getPosts();
  }

  onListItemClick(item) {}
}
