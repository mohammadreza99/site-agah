import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import {
  Stockholder,
  Department,
  Director,
  Employee,
  Testimonial,
  HistoryItem,
  Vision,
  GalleryItem,
  Counselor,
} from '@app/shared/models';
import { ApiService } from '../api.service';

@Injectable({
  providedIn: 'root',
})
export class AgahService {
  constructor(private apiService: ApiService) {}
  endPoints = {
    stockholders: 'stock-holders',
    counselors: 'counselors',
    departments: 'teams',
    directors: 'directors',
    employees: 'employees',
    histories: 'histories',
    vision: 'text?key=vision',
    testimonials: 'testimonials',
    galleries: 'galleries',
    lang: 'lang',
  };

  getStockholders(): Observable<Stockholder[]> {
    return this.apiService.get<Stockholder[]>(this.endPoints.stockholders);
  }

  getCounselors(): Observable<Counselor[]> {
    return this.apiService
      .get<Counselor[]>(this.endPoints.counselors)
      .pipe(map((res: any) => res.data));
  }

  getDepartments(): Observable<Department[]> {
    return this.apiService.get<Department[]>(this.endPoints.departments);
  }

  getDirectors(): Observable<Director[]> {
    return this.apiService.get<Director[]>(this.endPoints.directors);
  }

  getEmployees(): Observable<Employee[]> {
    return this.apiService.get<Employee[]>(this.endPoints.employees);
  }

  getHistories(): Observable<HistoryItem[]> {
    return this.apiService
      .get<HistoryItem[]>(this.endPoints.histories)
      .pipe(map((res: any) => res.data));
  }

  getVision(): Observable<Vision> {
    return this.apiService.get<Vision>(this.endPoints.vision);
  }

  getTestimonials(): Observable<Testimonial[]> {
    return this.apiService.get<Testimonial[]>(this.endPoints.testimonials);
  }

  getGalleries(): Observable<GalleryItem[]> {
    return this.apiService
      .get<any[]>(this.endPoints.galleries)
      .pipe(map((res: any) => res.data));
  }

  getLang() {
    return this.apiService.get(this.endPoints.lang);
  }
}
