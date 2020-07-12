import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { BlogPost } from '@shared/models/blog-post.model';
import { Product } from '@shared/models/product.model';
import { Vision } from '@shared/models/vision.model';
import { Director } from '@shared/models/director.mode';
import { Testimonial } from '@shared/models/testimonial.model';
import { ProductService } from '@core/http/product/product.service';
import { PostService } from '@core/http/post/post.service';
import { VisionService } from '@core/http/vision/vision.service';
import { DirectorService } from '@core/http/director/director.service';
import { TestimonialService } from '@core/http/testimonial/testimonial.service';

@Component({
  selector: 'ag-home-page',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  constructor(
    private productService: ProductService,
    private blogService: PostService,
    private visionService: VisionService,
    private directorService: DirectorService,
    private testimonialService: TestimonialService
  ) {}

  products$: Observable<Product[]>;
  blogPosts$: Observable<BlogPost[]>;
  vision$: Observable<Vision>;
  directors$: Observable<Director[]>;
  testimonials$: Observable<Testimonial[]>;

  ngOnInit(): void {
    this.blogPosts$ = this.blogService.getPosts();
    this.products$ = this.productService.getProducts();
    this.vision$ = this.visionService.getVisionById(1);
    this.directors$ = this.directorService.getDirectors();
    this.testimonials$ = this.testimonialService.getTestimonials();
  }
}
