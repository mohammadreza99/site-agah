import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { ApiService } from '@core/http/api.service';
import { Vision } from '@shared/models/vision.model';

@Injectable({
  providedIn: 'root',
})
export class VisionService {
  constructor(private apiService: ApiService) {}

  private readonly endPoint = 'visions';

  getVisions(): Observable<Vision[]> {
    return this.apiService.get<Vision[]>(this.endPoint);
  }

  getVisionById(visionId: number): Observable<Vision> {
    return this.apiService.get<Vision>(`${this.endPoint}/${visionId}`);
  }
}
