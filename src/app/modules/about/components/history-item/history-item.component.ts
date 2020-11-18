import { Component, Input, OnInit } from '@angular/core';

import { LanguageChecker } from '@shared/components/language-checker/language-checker.component';
import { HistoryItem } from '@shared/models';

@Component({
  selector: 'ag-history-item',
  templateUrl: './history-item.component.html',
  styleUrls: ['./history-item.component.scss'],
})
export class HistoryItemComponent extends LanguageChecker implements OnInit {
  @Input() history: HistoryItem;

  ngOnInit(): void {}
}
