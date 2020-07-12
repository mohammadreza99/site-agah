import { Injectable } from '@angular/core';
import { NewsLetter } from '@shared/models/news-letter.model';
import { ApiService } from '../api.service';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class NewsLetterService {
  constructor(private apiService: ApiService) {}

  private readonly endPoint = 'news-letter';

  getNewsLetters(): Observable<NewsLetter[]> {
    return this.apiService
      .get<NewsLetter[]>(this.endPoint)
      .pipe(map((res: any) => res.data));
  }

  getNewsLetterById(newsLetterId: number): Observable<NewsLetter> {
    return this.apiService.get<NewsLetter>(`${this.endPoint}/${newsLetterId}`);
  }
}
