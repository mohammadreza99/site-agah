import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';

import { ProductService } from '@core/http/product/product.service';
import { Product } from '@shared/models';

@Component({
  selector: 'ag-product-details',
  templateUrl: './product-details.page.html',
  styleUrls: ['./product-details.page.scss'],
})
export class ProductDetailsPage implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private productService: ProductService
  ) {}

  product$: Observable<Product>;
  otherProducts$: Observable<Product[]>;

  ngOnInit(): void {
    this.route.params.subscribe((param) => {
      this.product$ = this.productService.getProductById(param['id']);
    });
    this.otherProducts$ = this.productService.get();
  }
}
