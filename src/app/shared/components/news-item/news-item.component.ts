import { Component, OnInit, Input } from '@angular/core';

import { LanguageChecker } from '@shared/components/language-checker/language-checker.component';
import { News } from '@app/shared/models/news.model';

@Component({
  selector: 'ag-news-item',
  templateUrl: './news-item.component.html',
  styleUrls: ['./news-item.component.scss'],
})
export class NewsItemComponent extends LanguageChecker implements OnInit {
  @Input() news: News;

  ngOnInit(): void {}
}
