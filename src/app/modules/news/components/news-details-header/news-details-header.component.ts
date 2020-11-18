import { Component, OnInit, Input } from '@angular/core';

import { LanguageChecker } from '@shared/components/language-checker/language-checker.component';
import { News } from '@shared/models';

@Component({
  selector: 'ag-news-details-header',
  templateUrl: './news-details-header.component.html',
  styleUrls: ['./news-details-header.component.scss'],
})
export class NewsDetailsHeaderComponent
  extends LanguageChecker
  implements OnInit {
  @Input() news: News;

  ngOnInit(): void {}
}
