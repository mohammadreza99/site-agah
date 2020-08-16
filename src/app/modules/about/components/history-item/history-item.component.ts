import { Component, Input, OnInit } from '@angular/core';

import { LanguageChecker } from '@shared/components/language-checker/language-checker.component';
import { History } from '@shared/models/history.model';

@Component({
  selector: 'ag-history-item',
  templateUrl: './history-item.component.html',
  styleUrls: ['./history-item.component.scss'],
})
export class HistoryItemComponent extends LanguageChecker implements OnInit {
  @Input() history: History;

  ngOnInit(): void {}
}
