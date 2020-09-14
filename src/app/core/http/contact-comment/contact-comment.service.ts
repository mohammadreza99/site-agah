import { Injectable } from '@angular/core';
import { ContactComment } from '@app/shared/models/contact-comment';
import { ApiService } from '../api.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ContactCommentService {
  constructor(private apiService: ApiService) {}

  private readonly endPoint = 'contact-comments';

  post(contactComment: ContactComment): Observable<ContactComment> {
    const formData = this.apiService.getFormData(contactComment);
    return this.apiService.post<ContactComment>(`${this.endPoint}`, formData);
  }
}
