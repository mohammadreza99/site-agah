import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { LanguageChecker } from '@shared/components/language-checker/language-checker.component';
import { SocialNetwork } from '@shared/models';
import { ContactService } from '@core/http';

@Component({
  selector: 'ag-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent extends LanguageChecker implements OnInit {
  constructor(private contactService: ContactService) {
    super();
  }

  socialNetworks$: Observable<SocialNetwork[]>;

  ngOnInit(): void {
    this.socialNetworks$ = this.contactService.getSpcialNetworks();
  }
}
