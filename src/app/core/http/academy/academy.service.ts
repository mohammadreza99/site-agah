import { Injectable } from '@angular/core';
import { Category, Course, Workshop } from '@app/shared/models';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ApiService } from '../api.service';

@Injectable({
  providedIn: 'root',
})
export class AcademyService {
  constructor(private apiService: ApiService) {}
  endPoints = {
    categories: 'catagory',
    courses: 'courses',
    workshops: 'workshops',
    bestCourses: 'courses?best=true',
    byCategory: 'courses?category=',
  };

  getCategories(): Observable<Category[]> {
    return this.apiService.get<Category[]>(this.endPoints.categories);
  }

  getCourses(): Observable<Course[]> {
    return this.apiService
      .get<Course[]>(this.endPoints.courses)
      .pipe(map((res: any) => res.data));
  }

  getCourseById(id: any): Observable<Course> {
    return this.apiService.get<Course>(`${this.endPoints.courses}/${id}`);
  }

  getBestCourses(): Observable<Course[]> {
    return this.apiService
      .get<Course[]>(this.endPoints.bestCourses)
      .pipe(map((res: any) => res.data));
  }

  getCoursesByCategory(categoryId: number | string): Observable<Course[]> {
    return this.apiService
      .get<Course[]>(`${this.endPoints.byCategory}${categoryId}`)
      .pipe(map((res: any) => res.data));
  }

  getWorkshops(): Observable<Workshop[]> {
    return this.apiService
      .get<Workshop[]>(this.endPoints.workshops)
      .pipe(map((res: any) => res.data));
  }

  getWorkshopById(id: any): Observable<Workshop> {
    return this.apiService.get<Workshop>(`${this.endPoints.workshops}/${id}`);
  }
}
