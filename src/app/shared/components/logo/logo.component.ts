import { Component, Input, OnInit } from '@angular/core';

import { LanguageChecker } from '@shared/components/language-checker/language-checker.component';

@Component({
  selector: 'ag-logo',
  templateUrl: './logo.component.html',
  styleUrls: ['./logo.component.scss'],
})
export class LogoComponent extends LanguageChecker implements OnInit {
  @Input() isWhite = false;

  get logo(): string {
    if (this.isWhite) {
      return 'logo-w';
    } else {
      if (this.fa) {
        return 'logo-fa';
      } else {
        return 'logo-en';
      }
    }
  }

  ngOnInit(): void {}
}
