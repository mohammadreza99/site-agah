import { Injectable } from '@angular/core';
import { ApiService } from '../api.service';
import { Observable } from 'rxjs';
import { GalleryItem } from '@app/shared/models/gallery.model';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class GalleryService {
  constructor(private apiService: ApiService) {}

  private readonly endPoint = 'galleries';

  get(): Observable<GalleryItem[]> {
    return this.apiService
      .get<any[]>(this.endPoint)
      .pipe(map((res: any) => res.data));
  }

  getById(galleryId: number): Observable<GalleryItem> {
    return this.apiService.get<any>(`${this.endPoint}/${galleryId}`);
  }
}
