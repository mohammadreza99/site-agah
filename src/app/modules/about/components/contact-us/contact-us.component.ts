import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { LanguageChecker } from '@shared/components/language-checker/language-checker.component';
import { ContactService } from '@app/core/http';

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
    key: new FormControl(null),
    value: new FormControl(null),
  });

  captchaImage: string;
  captchaKey: string;
  showSuccess = false;

  ngOnInit(): void {}

  onSubmitForm() {
    this.contactService.sendContactComment(this.form.value).subscribe((res: any) => {
      if (res.img) {
        this.captchaImage = res.img;
        this.form.get('key').setValue(res.key);
      } else {
        this.form.controls['name'].setValue('');
        this.form.controls['email'].setValue('');
        this.form.controls['comment'].setValue('');
        this.form.controls['key'].setValue('');
        this.form.controls['value'].setValue('');
        this.form.markAsPristine();
        this.form.markAsUntouched();
        this.showSuccess = true;
        setTimeout(() => {
          this.showSuccess = false;
        }, 2000);
      }
    });
  }
}
