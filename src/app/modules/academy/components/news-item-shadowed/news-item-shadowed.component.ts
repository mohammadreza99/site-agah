import { Component, OnInit, Input } from '@angular/core';
import { News } from '@shared/models';

import { LanguageChecker } from '@shared/components/language-checker/language-checker.component';

@Component({
  selector: 'ag-news-item-shadowed',
  templateUrl: './news-item-shadowed.component.html',
  styleUrls: ['./news-item-shadowed.component.scss'],
})
export class NewsItemShadowedComponent
  extends LanguageChecker
  implements OnInit {
  @Input() news: News;

  ngOnInit(): void {}
}
