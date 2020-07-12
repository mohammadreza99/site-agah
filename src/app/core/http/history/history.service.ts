import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { ApiService } from '@core/http/api.service';
import { History } from '@shared/models/history.model';

@Injectable({
  providedIn: 'root',
})
export class HistoryService {
  constructor(private apiService: ApiService) {}

  private readonly endPoint = 'histories';

  getHistorys(): Observable<History[]> {
    return this.apiService
      .get<History[]>(this.endPoint)
      .pipe(map((res: any) => res.data));
  }

  getHistoryById(historyId: number): Observable<History> {
    return this.apiService.get<History>(`${this.endPoint}/${historyId}`);
  }
}
