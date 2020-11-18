import { Component, OnInit } from '@angular/core';
import { tileLayer, latLng, marker, icon, Marker, MapOptions } from 'leaflet';
import { Observable } from 'rxjs';

import { LanguageChecker } from '@shared/components/language-checker/language-checker.component';
import { ContactService } from '@core/http';
import { SocialNetwork, ContactUsInfo } from '@shared/models';

@Component({
  selector: 'ag-contact-us-page',
  templateUrl: './contact-us.page.html',
  styleUrls: ['./contact-us.page.scss'],
})
export class ContactUsPage extends LanguageChecker implements OnInit {
  constructor(private contactService: ContactService) {
    super();
  }

  socialNetworks$: Observable<SocialNetwork[]>;
  contactUsInfo: ContactUsInfo;
  options: MapOptions;
  layers: Marker[];

  ngOnInit(): void {
    this.socialNetworks$ = this.contactService.getSpcialNetworks();
    this.contactService
      .getContactUsInfo()
      .subscribe((contact: ContactUsInfo) => {
        this.contactUsInfo = contact;
        this.options = {
          layers: [
            tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'),
          ],
          zoom: 100,
          center: latLng(
            this.contactUsInfo.latitude,
            this.contactUsInfo.longitude
          ),
        };
        this.layers = [
          marker([this.contactUsInfo.latitude, this.contactUsInfo.longitude], {
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
