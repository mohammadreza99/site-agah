import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { ProductService } from '@core/http/product/product.service';
import {
  Product,
  Vision,
  Department,
  Director,
  Testimonial,
  Post,
} from '@shared/models';
import { AgahService, MultimediaService } from '@core/http';
import { LanguageChecker } from '@app/shared/components/language-checker/language-checker.component';

@Component({
  selector: 'ag-home-page',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage extends LanguageChecker implements OnInit {
  constructor(
    private productService: ProductService,
    private multimediaService: MultimediaService,
    private agahService: AgahService
  ) {
    super();
  }

  products$: Observable<Product[]>;
  vision$: Observable<Vision>;
  departments$: Observable<Department[]>;
  directors$: Observable<Director[]>;
  testimonials$: Observable<Testimonial[]>;
  featuredPosts: Post[];

  ngOnInit(): void {
    this.multimediaService.getPosts().subscribe((posts) => {
      this.featuredPosts = posts.filter((p) => p.featured);
    });
    this.products$ = this.productService.getByLimit(3);
    this.vision$ = this.agahService.getVision();
    this.directors$ = this.agahService.getDirectors();
    this.testimonials$ = this.agahService.getTestimonials();
    this.departments$ = this.agahService.getDepartments();
  }
}
