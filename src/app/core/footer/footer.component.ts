import { Component, OnInit } from '@angular/core';
import { SocialNetworkService } from '../http/social-network/social-network.service';
import { Observable } from 'rxjs';
import { SocialNetwork } from '@app/shared/models/social-network.model';

@Component({
  selector: 'ag-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent implements OnInit {
  constructor(private socialNetworkService: SocialNetworkService) {}

  socialNetworks$: Observable<SocialNetwork[]>;

  ngOnInit(): void {
    this.socialNetworks$ = this.socialNetworkService.getSocialNetworks();
  }
}
