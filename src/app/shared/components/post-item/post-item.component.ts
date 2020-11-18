import { Component, Input, OnInit } from '@angular/core';
import { Post } from '@shared/models';

import { LanguageChecker } from '@shared/components/language-checker/language-checker.component';

@Component({
  selector: 'ag-post-item',
  templateUrl: './post-item.component.html',
  styleUrls: ['./post-item.component.scss'],
})
export class PostItemComponent extends LanguageChecker implements OnInit {
  @Input() post: Post;

  ngOnInit(): void {}
}
