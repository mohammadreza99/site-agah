import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { LanguageChecker } from '@shared/components/language-checker/language-checker.component';

@Component({
  selector: 'ag-accordion-item',
  templateUrl: './accordion-item.component.html',
  styleUrls: ['./accordion-item.component.scss'],
})
export class AccordionItemComponent extends LanguageChecker implements OnInit {
  @Input() active = false;
  @Input() icon: string;
  @Input() title: string;
  @Output() setActive = new EventEmitter();

  ngOnInit(): void {}
}
