import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { LanguageChecker } from '@shared/components/language-checker/language-checker.component';

@Component({
  selector: 'ag-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss'],
})
export class DropdownComponent extends LanguageChecker implements OnInit {
  @Input() icon = 'fal fa-chevron-down';
  @Input() title: string;
  @Input() list: { text: string; routerLink?: string; exact?: boolean }[];
  @Input() iconPos: 'start' | 'end' = 'end';
  @Output() listItemClick = new EventEmitter();

  isDropdownOpen = false;

  ngOnInit(): void {}

  onClickOutside() {
    this.isDropdownOpen = false;
  }

  toggleDropDown() {
    this.isDropdownOpen = !this.isDropdownOpen;
  }
}
