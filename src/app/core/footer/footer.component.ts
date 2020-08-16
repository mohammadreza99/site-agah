import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { SocialNetworkService } from '@core/http/social-network/social-network.service';
import { SocialNetwork } from '@shared/models/social-network.model';
import { LanguageChecker } from '@shared/components/language-checker/language-checker.component';

@Component({
  selector: 'ag-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent extends LanguageChecker implements OnInit {
  constructor(private socialNetworkService: SocialNetworkService) {
    super();
  }

  socialNetworks$: Observable<SocialNetwork[]>;

  ngOnInit(): void {
    this.socialNetworks$ = this.socialNetworkService.get();
  }
}
