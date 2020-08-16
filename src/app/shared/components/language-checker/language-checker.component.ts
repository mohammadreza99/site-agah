import { Component, OnInit, Optional } from '@angular/core';

import { TranslationService } from '@core/services/translation.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'ag-language-checker',
  templateUrl: './language-checker.component.html',
  styleUrls: ['./language-checker.component.scss'],
})
export class LanguageChecker implements OnInit {
  constructor(@Optional() private translationService?: TranslationService) {
    this.translationService?.getCurrentLang()?.subscribe((lang: string) => {
      this.activeLang = lang;
      const body = document.querySelector('body');
      if (this.fa) {
        body.classList.remove('ag-ltr');
        body.classList.add('ag-rtl');
      } else if (this.en) {
        body.classList.remove('ag-rtl');
        body.classList.add('ag-ltr');
      }
    });
  }

  activeLang = 'fa';

  get en() {
    return this.activeLang === 'en';
  }

  get fa() {
    return this.activeLang === 'fa';
  }

  use(lang: string): Observable<any> {
    return this.translationService?.use(lang);
  }

  get(
    key: string | Array<string>,
    interpolateParams?: object
  ): Observable<string | object> {
    return this.translationService?.stream(key, interpolateParams);
  }

  ngOnInit(): void {}
}
