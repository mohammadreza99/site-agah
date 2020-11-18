import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { ApiService } from '../api.service';
import { News, Post } from '@app/shared/models';

@Injectable({
  providedIn: 'root',
})
export class MultimediaService {
  constructor(private apiService: ApiService) {}

  endPoints = {
    news: 'news',
    posts: 'posts',
    featuredPosts: 'posts?featured=true',
  };

  getNews(): Observable<News[]> {
    return this.apiService
      .get<News[]>(this.endPoints.news)
      .pipe(map((res: any) => res.data));
  }

  getNewsById(newsId: number): Observable<News> {
    return this.apiService.get<News>(`${this.endPoints.news}/${newsId}`);
  }

  getPosts(): Observable<Post[]> {
    return this.apiService
      .get<Post[]>(this.endPoints.posts)
      .pipe(map((res: any) => res.data));
  }

  getFeaturedPosts(): Observable<Post[]> {
    return this.apiService
      .get<Post[]>(this.endPoints.featuredPosts)
      .pipe(map((res: any) => res.data));
  }

  getPostById(postId: SVGAnimatedString): Observable<Post> {
    return this.apiService.get<Post>(`${this.endPoints.posts}/${postId}`);
  }

  getPostsByTags(tags: string[], currentId: any) {
    let finalTags = '';
    for (const tag of tags) {
      finalTags +=
        'tag[]=' + tag + (tags.indexOf(tag) === tags.length - 1 ? '' : ',');
    }
    return this.apiService
      .get<Post[]>(
        this.endPoints.posts + '?' + finalTags + '&current_id=' + currentId
      )
      .pipe(map((res: any) => res.data));
  }
}
