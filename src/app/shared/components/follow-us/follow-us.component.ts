import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { SocialNetworkService } from '@core/http/social-network/social-network.service';
import { LanguageChecker } from '@shared/components/language-checker/language-checker.component';
import { SocialNetwork } from '@shared/models/social-network.model';

@Component({
  selector: 'ag-follow-us',
  templateUrl: './follow-us.component.html',
  styleUrls: ['./follow-us.component.scss'],
})
export class FollowUsComponent extends LanguageChecker implements OnInit {
  constructor(private socialNetworkService: SocialNetworkService) {
    super();
  }

  @Input() dotsPosition: 'left' | 'right' = 'left';

  socialNetworks$: Observable<SocialNetwork[]>;

  ngOnInit(): void {
    this.socialNetworks$ = this.socialNetworkService.get();
  }

  get dotsInRight() {
    return this.dotsPosition === 'right';
  }

  get dotsInLeft() {
    return this.dotsPosition === 'left';
  }
}
