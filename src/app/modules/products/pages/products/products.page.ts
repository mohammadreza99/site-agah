import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { Product } from '@shared/models/product.model';
import { ProductService } from '@core/http/product/product.service';

@Component({
  selector: 'ag-products-page',
  templateUrl: './products.page.html',
  styleUrls: ['./products.page.scss'],
})
export class ProductsPage implements OnInit {
  constructor(private productService: ProductService) {}

  products$: Observable<Product[]>;

  ngOnInit(): void {
    this.products$ = this.productService.get();
  }
}
