import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { BlogPost } from '@shared/models/blog-post.model';
import { ApiService } from '@core/http/api.service';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class PostService {
  constructor(private apiService: ApiService) {}

  private readonly endPoint = 'posts';

  getPosts(): Observable<BlogPost[]> {
    return this.apiService
      .get<BlogPost[]>(this.endPoint)
      .pipe(map((res: any) => res.data));
  }

  getPostById(postId: string): Observable<BlogPost> {
    return this.apiService.get<BlogPost>(`${this.endPoint}/${postId}`);
  }
}
