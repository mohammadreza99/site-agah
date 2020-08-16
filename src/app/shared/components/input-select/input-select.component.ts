import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { LanguageChecker } from '@shared/components/language-checker/language-checker.component';

@Component({
  selector: 'ag-input-select',
  templateUrl: './input-select.component.html',
  styleUrls: ['./input-select.component.scss'],
})
export class InputSelectComponent extends LanguageChecker implements OnInit {
  @Input() icon = 'fal fa-chevron-down';
  @Input() list: string[];
  @Input() iconPos: 'start' | 'end' = 'end';
  @Output() listItemClick = new EventEmitter();

  selected = 'Choose';
  isDropdownOpen = false;

  ngOnInit(): void {}

  onClickOutside() {
    this.isDropdownOpen = false;
  }

  onDropdownItemClick(item: string) {
    this.selected = item;
    this.listItemClick.emit(item);
  }

  toggleDropDown() {
    this.isDropdownOpen = !this.isDropdownOpen;
  }
}
