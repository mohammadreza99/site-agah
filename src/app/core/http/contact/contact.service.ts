import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Contact } from '@shared/models/contact.model';
import { ApiService } from '@core/http/api.service';

@Injectable({
  providedIn: 'root',
})
export class ContactService {
  constructor(private apiService: ApiService) {}

  private readonly contactsEndPoint = 'contacts';

  getContactInfo(): Observable<Contact> {
    return this.apiService.get<Contact>(this.contactsEndPoint);
  }
}
