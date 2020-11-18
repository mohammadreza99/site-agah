import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { ApiService } from '@core/http/api.service';
import {
  ContactUsInfo,
  ContactComment,
  SocialNetwork,
  CommentItem,
} from '@shared/models';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class ContactService {
  constructor(private apiService: ApiService) {}
  endPoints = {
    contactUs: 'contacts',
    comments: 'comments',
    contactComment: 'contact-comments',
    newsLetter: 'news-letter-users',
    socialNetworks: 'social-networks',
  };

  getContactUsInfo(): Observable<ContactUsInfo> {
    return this.apiService.get<ContactUsInfo>(this.endPoints.contactUs);
  }

  sendContactComment(
    contactComment: ContactComment
  ): Observable<ContactComment> {
    const formData = this.apiService.getFormData(contactComment);
    return this.apiService.post<ContactComment>(
      `${this.endPoints.contactComment}`,
      formData
    );
  }

  subscribeToNewsLetter(emailAddress: string) {
    return this.apiService.post(this.endPoints.newsLetter, {
      email: emailAddress,
    });
  }

  getSpcialNetworks(): Observable<SocialNetwork[]> {
    return this.apiService.get<SocialNetwork[]>(this.endPoints.socialNetworks);
  }

  postComment(comment: CommentItem): Observable<CommentItem> {
    const formData = this.apiService.getFormData(comment);
    return this.apiService.post<CommentItem>(
      `${this.endPoints.comments}`,
      formData
    );
  }
}
