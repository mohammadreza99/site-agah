import { Component, OnInit } from '@angular/core';
import { tileLayer, latLng, marker, icon, Marker, MapOptions } from 'leaflet';
import { Observable } from 'rxjs';

import { SocialNetworkService } from '@core/http/social-network/social-network.service';
import { SocialNetwork } from '@shared/models/social-network.model';
import { LanguageChecker } from '@shared/components/language-checker/language-checker.component';
import { ContactService } from '@core/http/contact/contact.service';
import { Contact } from '@shared/models/contact.model';

@Component({
  selector: 'ag-contact-us-page',
  templateUrl: './contact-us.page.html',
  styleUrls: ['./contact-us.page.scss'],
})
export class ContactUsPage extends LanguageChecker implements OnInit {
  constructor(
    private socialNetworkService: SocialNetworkService,
    private contactService: ContactService
  ) {
    super();
  }

  socialNetworks$: Observable<SocialNetwork[]>;
  contactInfo: Contact;
  options: MapOptions;
  layers: Marker[];

  ngOnInit(): void {
    this.socialNetworks$ = this.socialNetworkService.get();
    this.contactService.getContactInfo().subscribe((contact: Contact) => {
      this.contactInfo = contact;
      this.options = {
        layers: [
          tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'),
        ],
        zoom: 100,
        center: latLng(this.contactInfo.latitude, this.contactInfo.longitude),
      };
      this.layers = [
        marker([this.contactInfo.latitude, this.contactInfo.longitude], {
          icon: icon({
            iconSize: [25, 41],
            iconAnchor: [13, 41],
            iconUrl: 'assets/marker-icon.png',
            shadowUrl: 'assets/marker-shadow.png',
          }),
        }),
      ];
    });
  }
}
