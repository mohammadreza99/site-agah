import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { LanguageChecker } from '@shared/components/language-checker/language-checker.component';
import { SocialNetwork } from '@shared/models';
import { ContactService } from '@core/http';

@Component({
  selector: 'ag-follow-us',
  templateUrl: './follow-us.component.html',
  styleUrls: ['./follow-us.component.scss'],
})
export class FollowUsComponent extends LanguageChecker implements OnInit {
  constructor(private contactService: ContactService) {
    super();
  }

  @Input() dotsPosition: 'left' | 'right' = 'left';

  socialNetworks$: Observable<SocialNetwork[]>;

  ngOnInit(): void {
    this.socialNetworks$ = this.contactService.getSpcialNetworks();
  }

  get dotsInRight() {
    return this.dotsPosition === 'right';
  }

  get dotsInLeft() {
    return this.dotsPosition === 'left';
  }
}
