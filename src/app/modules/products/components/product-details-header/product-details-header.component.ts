import { Component, OnInit, Input } from '@angular/core';
import { Product } from '@shared/models/product.model';

@Component({
  selector: 'ag-product-details-header',
  templateUrl: './product-details-header.component.html',
  styleUrls: ['./product-details-header.component.scss'],
})
export class ProductDetailsHeaderComponent implements OnInit {
  constructor() {}

  @Input() product: Product;

  ngOnInit(): void {}
}
