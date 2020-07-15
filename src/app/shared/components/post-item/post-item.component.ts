import { Component, OnInit, Input } from '@angular/core';
import { Post } from '@app/shared/models/post.model';

@Component({
  selector: 'ag-post-item',
  templateUrl: './post-item.component.html',
  styleUrls: ['./post-item.component.scss'],
})
export class PostItemComponent implements OnInit {
  constructor() {}

  @Input() post: Post;

  ngOnInit(): void {}
}
