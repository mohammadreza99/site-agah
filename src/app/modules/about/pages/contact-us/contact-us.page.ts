import { Component, OnInit } from '@angular/core';
import { tileLayer, latLng, polygon, circle, marker, icon } from 'leaflet';
import { SocialNetworkService } from '@app/core/http/social-network/social-network.service';
import { Observable } from 'rxjs';
import { SocialNetwork } from '@app/shared/models/social-network.model';

@Component({
  selector: 'ag-contact-us-page',
  templateUrl: './contact-us.page.html',
  styleUrls: ['./contact-us.page.scss'],
})
export class ContactUsPage implements OnInit {
  constructor(private socialNetworkService: SocialNetworkService) {}

  socialNetworks$: Observable<SocialNetwork[]>;
  options = {
    layers: [tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png')],
    zoom: 5,
    center: latLng(46.879966, -121.726909),
  };
  layers = [
    marker([46.879966, -121.726909], {
      icon: icon({
        iconSize: [25, 41],
        iconAnchor: [13, 41],
        iconUrl: 'assets/marker-icon.png',
        shadowUrl: 'assets/marker-shadow.png',
      }),
    }),
  ];

  ngOnInit(): void {
    this.socialNetworks$ = this.socialNetworkService.getSocialNetworks();
  }
}
