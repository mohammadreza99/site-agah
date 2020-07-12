import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { NewsLetterUserService } from '@app/core/http/news-letter-user/news-letter-user.service';

@Component({
  selector: 'ag-newsletter-textbox',
  templateUrl: './newsletter-textbox.component.html',
  styleUrls: ['./newsletter-textbox.component.scss'],
})
export class NewsletterTextboxComponent implements OnInit {
  constructor(private newsLetterUserService: NewsLetterUserService) {}

  email = new FormControl('', [Validators.email]);

  ngOnInit(): void {}

  onSubmitNewsLetter() {
    if (this.email.value === '') {
      alert('please enter your email!');
    } else {
      this.newsLetterUserService
        .subscribeUserToNewsLetter(this.email.value)
        .subscribe((a) => {
          this.email.setValue(null);
        });
    }
  }
}
