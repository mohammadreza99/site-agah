import { Component, Input, OnInit } from '@angular/core';
import { Process } from '@shared/models';

import { LanguageChecker } from '@shared/components/language-checker/language-checker.component';

@Component({
  selector: 'ag-process-item',
  templateUrl: './process-item.component.html',
  styleUrls: ['./process-item.component.scss'],
})
export class ProcessItemComponent extends LanguageChecker implements OnInit {
  @Input() process: Process;
  @Input() direction: 'ltr' | 'rtl' = 'rtl';

  get isRtl() {
    return this.direction === 'rtl';
  }

  ngOnInit(): void {}
}
