import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { NewsLetterUserService } from '@core/http/news-letter-user/news-letter-user.service';
import { LanguageChecker } from '@shared/components/language-checker/language-checker.component';

@Component({
  selector: 'ag-newsletter-textbox',
  templateUrl: './newsletter-textbox.component.html',
  styleUrls: ['./newsletter-textbox.component.scss'],
})
export class NewsletterTextboxComponent extends LanguageChecker
  implements OnInit {
  constructor(private newsLetterUserService: NewsLetterUserService) {
    super();
  }

  form = new FormGroup({
    email: new FormControl('', [Validators.email, Validators.required]),
  });

  ngOnInit(): void {}

  onSubmitNewsLetter() {
    if (this.form.valid) {
      this.newsLetterUserService
        .subscribe(this.form.get('email').value)
        .subscribe((a) => {
          this.form.get('email').setValue(null);
        });
    }
  }
}
