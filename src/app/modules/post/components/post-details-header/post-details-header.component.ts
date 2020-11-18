import { Component, OnInit, Input } from '@angular/core';

import { LanguageChecker } from '@shared/components/language-checker/language-checker.component';
import { Post } from '@shared/models';

@Component({
  selector: 'ag-post-details-header',
  templateUrl: './post-details-header.component.html',
  styleUrls: ['./post-details-header.component.scss'],
})
export class PostDetailsHeaderComponent
  extends LanguageChecker
  implements OnInit {
  @Input() post: Post;

  ngOnInit(): void {}
}
