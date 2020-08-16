import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { News } from '@shared/models/news.model';
import { ApiService } from '@core/http/api.service';

@Injectable({
  providedIn: 'root',
})
export class NewsService {
  constructor(private apiService: ApiService) {}

  private readonly endPoint = 'news';

  get(): Observable<News[]> {
    return this.apiService
      .get<News[]>(this.endPoint)
      .pipe(map((res: any) => res.data));
  }

  getById(newsId: number): Observable<News> {
    return this.apiService.get<News>(`${this.endPoint}/${newsId}`);
  }
}
