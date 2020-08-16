import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { LanguageChecker } from '@shared/components/language-checker/language-checker.component';
import { ContactComment } from '@app/shared/models/contact-comment';
import { ContactService } from '@app/core/http/contact/contact.service';

@Component({
  selector: 'ag-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss'],
})
export class ContactUsComponent extends LanguageChecker implements OnInit {
  constructor(private contactService: ContactService) {
    super();
  }

  form = new FormGroup({
    name: new FormControl(null, [Validators.required]),
    email: new FormControl(null, [Validators.required, Validators.email]),
    comment: new FormControl(null, [Validators.required]),
    recaptcha: new FormControl(null, [Validators.required]),
  });
  contactComment;

  ngOnInit(): void {
    this.contactService.submitContactComment(this.form.value).subscribe();
  }

  onSubmitForm() {}

  handleReset() {}
  handleExpire() {}
  handleLoad() {}
  handleSuccess(event) {}
}
