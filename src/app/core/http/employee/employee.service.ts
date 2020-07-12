import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { ApiService } from '@core/http/api.service';
import { Employee } from '@shared/models/employee.model';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class EmployeeService {
  constructor(private apiService: ApiService) {}

  private readonly endPoint = 'employees';

  getEmployees(): Observable<Employee[]> {
    return this.apiService
      .get<Employee[]>(this.endPoint)
      .pipe(map((res: any) => res.data));
  }

  getEmployeeById(employeeId: number): Observable<Employee> {
    return this.apiService.get<Employee>(`${this.endPoint}/${employeeId}`);
  }
}
