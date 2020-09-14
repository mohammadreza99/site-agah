import { Injectable } from '@angular/core';
import { ApiService } from '../api.service';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Counselor } from '@app/shared/models/counselor.model';

@Injectable({
  providedIn: 'root',
})
export class CounselorService {
  constructor(private apiService: ApiService) {}

  private readonly endPoint = 'counselors';

  get(): Observable<Counselor[]> {
    return this.apiService
      .get<Counselor[]>(this.endPoint)
      .pipe(map((res: any) => res.data));
  }

  getById(counselorId: object): Observable<Counselor> {
    return this.apiService.get<Counselor>(`${this.endPoint}/${counselorId}`);
  }
}
