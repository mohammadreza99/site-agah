import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { Post } from '@shared/models/post.model';
import { Product } from '@shared/models/product.model';
import { Vision } from '@shared/models/vision.model';
import { Director } from '@shared/models/director.model';
import { Testimonial } from '@shared/models/testimonial.model';
import { ProductService } from '@core/http/product/product.service';
import { PostService } from '@core/http/post/post.service';
import { VisionService } from '@core/http/vision/vision.service';
import { DirectorService } from '@core/http/director/director.service';
import { TestimonialService } from '@core/http/testimonial/testimonial.service';
import { Department } from '@shared/models/department.model';
import { DepartmentService } from '@core/http/department/department.service';

@Component({
  selector: 'ag-home-page',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  constructor(
    private productService: ProductService,
    private postService: PostService,
    private visionService: VisionService,
    private directorService: DirectorService,
    private departmentService: DepartmentService,
    private testimonialService: TestimonialService
  ) {}

  products$: Observable<Product[]>;
  posts$: Observable<Post[]>;
  vision$: Observable<Vision>;
  departments$: Observable<Department[]>;
  directors$: Observable<Director[]>;
  testimonials$: Observable<Testimonial[]>;

  ngOnInit(): void {
    this.posts$ = this.postService.get();
    this.products$ = this.productService.getByLimit(3);
    this.vision$ = this.visionService.get();
    this.directors$ = this.directorService.get();
    this.testimonials$ = this.testimonialService.get();
    this.departments$ = this.departmentService.get();
  }
}
