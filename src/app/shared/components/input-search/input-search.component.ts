import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import { LanguageChecker } from '@shared/components/language-checker/language-checker.component';

@Component({
  selector: 'ag-input-search',
  templateUrl: './input-search.component.html',
  styleUrls: ['./input-search.component.scss'],
})
export class InputSearchComponent extends LanguageChecker implements OnInit {
  @Output() searchIconClick = new EventEmitter();
  @Output() valueChange = new EventEmitter();

  value: string = null;

  ngOnInit(): void {}
}
