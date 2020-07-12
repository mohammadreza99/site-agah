import { Component, OnInit, Input } from '@angular/core';
import { SocialNetwork } from '@shared/models/social-network.model';

@Component({
  selector: 'ag-social-networks',
  templateUrl: './social-networks.component.html',
  styleUrls: ['./social-networks.component.scss'],
})
export class SocialNetworksComponent implements OnInit {
  constructor() {}

  @Input() socialNetworks: SocialNetwork[];
  @Input() colored = true;

  ngOnInit(): void {}
}
