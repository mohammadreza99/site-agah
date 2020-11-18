import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { ContactService } from '@core/http';
import { LanguageChecker } from '@shared/components/language-checker/language-checker.component';

@Component({
  selector: 'ag-newsletter-textbox',
  templateUrl: './newsletter-textbox.component.html',
  styleUrls: ['./newsletter-textbox.component.scss'],
})
export class NewsletterTextboxComponent
  extends LanguageChecker
  implements OnInit {
  constructor(private contactService: ContactService) {
    super();
  }

  form = new FormGroup({
    email: new FormControl('', [Validators.email, Validators.required]),
  });
  showSuccess = false;

  ngOnInit(): void {}

  onSubmitNewsLetter() {
    if (this.form.valid) {
      this.contactService
        .subscribeToNewsLetter(this.form.get('email').value)
        .subscribe((a) => {
          this.showSuccess = true;
          setTimeout(() => {
            this.showSuccess = false;
          }, 2000);
          this.form.get('email').setValue('');
          this.form.markAsPristine();
          this.form.markAsUntouched();
        });
    }
  }
}
