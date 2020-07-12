import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Director } from '@shared/models/director.mode';
import { ApiService } from '@core/http/api.service';

@Injectable({
  providedIn: 'root',
})
export class DirectorService {
  constructor(private apiService: ApiService) {}

  private readonly endPoint = 'directors';

  getDirectors(): Observable<Director[]> {
    return this.apiService.get<Director[]>(this.endPoint);
  }

  getDirectorById(directorId: number): Observable<Director> {
    return this.apiService.get<Director>(`${this.endPoint}/${directorId}`);
  }
}
