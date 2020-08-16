import { Component, OnInit } from '@angular/core';

import { LanguageChecker } from '@shared/components/language-checker/language-checker.component';

@Component({
  selector: 'ag-newsletter-subscribe',
  templateUrl: './newsletter-subscribe.component.html',
  styleUrls: ['./newsletter-subscribe.component.scss'],
})
export class NewsletterSubscribeComponent extends LanguageChecker
  implements OnInit {
  ngOnInit(): void {}
}
