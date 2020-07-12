import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs';

import { SocialNetwork } from '@shared/models/social-network.model';
import { SocialNetworkService } from '@core/http/social-network/social-network.service';

@Component({
  selector: 'ag-follow-us',
  templateUrl: './follow-us.component.html',
  styleUrls: ['./follow-us.component.scss'],
})
export class FollowUsComponent implements OnInit {
  constructor(private socialNetworkService: SocialNetworkService) {}

  @Input() dotsPosition: 'left' | 'right' = 'left';

  socialNetworks$: Observable<SocialNetwork[]>;

  ngOnInit(): void {
    this.socialNetworks$ = this.socialNetworkService.getSocialNetworks();
  }

  get dotsInRight() {
    return this.dotsPosition === 'right';
  }

  get dotsInLeft() {
    return this.dotsPosition === 'left';
  }
}
