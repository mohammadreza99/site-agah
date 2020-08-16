import { Component, Input, OnInit } from '@angular/core';

import { LanguageChecker } from '@shared/components/language-checker/language-checker.component';
import { Post } from '@shared/models/post.model';

@Component({
  selector: 'ag-post-item',
  templateUrl: './post-item.component.html',
  styleUrls: ['./post-item.component.scss'],
})
export class PostItemComponent extends LanguageChecker implements OnInit {
  @Input() post: Post;

  ngOnInit(): void {}
}
