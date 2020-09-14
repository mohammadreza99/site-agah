import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { LanguageChecker } from '@shared/components/language-checker/language-checker.component';
import { ContactCommentService } from '@app/core/http/contact-comment/contact-comment.service';

@Component({
  selector: 'ag-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss'],
})
export class ContactUsComponent extends LanguageChecker implements OnInit {
  constructor(private contactCommentService: ContactCommentService) {
    super();
  }

  form = new FormGroup({
    name: new FormControl(null, [Validators.required]),
    email: new FormControl(null, [Validators.required, Validators.email]),
    comment: new FormControl(null, [Validators.required]),
    key: new FormControl(null),
    value: new FormControl(null),
  });

  captchaImage: string;
  captchaKey: string;
  showSuccess = false;

  ngOnInit(): void {}

  onSubmitForm() {
    this.contactCommentService.post(this.form.value).subscribe((res: any) => {
      if (res.img) {
        this.captchaImage = res.img;
        this.form.get('key').setValue(res.key);
      }
    });
  }
}
