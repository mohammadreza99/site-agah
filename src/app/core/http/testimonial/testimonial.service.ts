import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { ApiService } from '@core/http/api.service';
import { Testimonial } from '@shared/models/testimonial.model';

@Injectable({
  providedIn: 'root',
})
export class TestimonialService {
  constructor(private apiService: ApiService) {}

  private readonly endPoint = 'testimonials';

  getTestimonials(): Observable<Testimonial[]> {
    return this.apiService.get<Testimonial[]>(this.endPoint);
  }

  getTestimonialById(testimonialId: number): Observable<Testimonial> {
    return this.apiService.get<Testimonial>(
      `${this.endPoint}/${testimonialId}`
    );
  }
}
